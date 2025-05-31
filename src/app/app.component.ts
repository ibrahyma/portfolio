import {AfterViewChecked, Component, inject, Renderer2, ViewChild, ViewContainerRef} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PageLoaderComponent} from "./core/components/page-loader/page-loader.component";
import {AlertComponent} from "./shared/components/alert/alert.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, PageLoaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {

    @ViewChild("alert", {read: ViewContainerRef, static: false})
    alertContainer!: ViewContainerRef;
    private renderer = inject(Renderer2);
    private alertLoaded = false;

    htmlIconLight = 'favicon-light.png';
    htmlIconDark = 'favicon-dark.png';
    private welcomeMessage = {
        title: "Bienvenue sur mon portfolio",
        description: "Explorez mon univers de développeur à travers une interface type OS. Bonne navigation !",
        buttons: [
            {
                text: "OK",
                action: () => {
                    localStorage.setItem('first-visited', 'ok');
                    this.clearAlert();
                }
            }
        ]
    };

    constructor() {
        this.handleThemeChange();

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', () => this.handleThemeChange());
    }

    ngAfterViewChecked() {
        if (this.alertLoaded) return;

        if (localStorage.getItem('first-visited') === null) {
            if (this.alertContainer) {
                this.appendAlert(
                    this.welcomeMessage.title,
                    this.welcomeMessage.description,
                    this.welcomeMessage.buttons
                );
            }
            return;
        }

        this.alertLoaded = true;
    }

    appendAlert(title: string, description: string, buttons?: { text: string, action: () => void }[]) {
        const alert = this.alertContainer.createComponent(AlertComponent);
        alert.instance.title = title;
        alert.instance.description = description;

        if (!buttons) return;
        alert.instance.buttons = buttons;
    }

    clearAlert() {
        this.alertContainer.clear();
    }

    private handleThemeChange(): void {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.updateFavicon(isDarkMode ? this.htmlIconDark : this.htmlIconLight);
    }

    private updateFavicon(iconHref: string): void {
        let linkElement = document.querySelector('link[rel="icon"]') as HTMLLinkElement;

        if (linkElement) {
            this.renderer.setAttribute(linkElement, 'href', iconHref);
            return;
        }

        linkElement = this.renderer.createElement('link') as HTMLLinkElement;
        this.renderer.setAttribute(linkElement, 'rel', 'icon');
        this.renderer.setAttribute(linkElement, 'type', 'image/x-icon');
        this.renderer.setAttribute(linkElement, 'href', iconHref);
        this.renderer.appendChild(document.head, linkElement);
    }
}
