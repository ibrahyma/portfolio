import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PageLoaderComponent} from "./core/components/page-loader/page-loader.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, PageLoaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    htmlIconLight = 'favicon-light.png';
    htmlIconDark = 'favicon-dark.png';

    constructor(private renderer: Renderer2) {
        this.handleThemeChange();

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', () => this.handleThemeChange());
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
