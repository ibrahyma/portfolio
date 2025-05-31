import {
    Component,
    ComponentRef, ViewChild,
    ViewContainerRef
} from '@angular/core';
import {TaskbarComponent} from "../../core/components/taskbar/taskbar.component";
import {
    CustomableFolderIconComponent
} from "../../shared/components/customable-folder-icon/customable-folder-icon.component";
import {AboutComponent} from "../windows/about/about.component";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {SchoolComponent} from "../windows/school/school.component";
import {WindowComponent} from "../../core/components/window/window.component";
import {ExperiencesComponent} from "../windows/experiences/experiences.component";
import {ProjectsComponent} from "../windows/projects/projects.component";

interface ShortcutWindow {
    id: string;
    name: string;
    color: string;
    shadowColor: string;
    component: any;
}

@Component({
    selector: 'app-desktop',
    imports: [
        TaskbarComponent,
        CustomableFolderIconComponent,
        CdkDrag
    ],
    templateUrl: './desktop.component.html',
    styleUrl: './desktop.component.scss'
})
export class DesktopComponent {

    @ViewChild("window", {read: ViewContainerRef, static: true})
    window!: ViewContainerRef;

    activeWindow?: ComponentRef<WindowComponent>;

    shortcuts: ShortcutWindow[] = [
        {
            name: 'À propos',
            id: 'about',
            color: '#88CCFF',
            shadowColor: '#224488',
            component: AboutComponent
        },
        {
            name: 'Formation',
            id: 'formation',
            color: '#80E880',
            shadowColor: '#116611',
            component: SchoolComponent
        },
        {
            name: 'Expérience',
            id: 'experience',
            color: '#FFCC88',
            shadowColor: '#442211',
            component: ExperiencesComponent
        },
        {
            name: 'Projets',
            id: 'projets',
            color: '#CC88FF',
            shadowColor: '#441122',
            component: ProjectsComponent
        }
    ];

    private deviceIsDesktop(): boolean {
        return window.matchMedia('(pointer: fine)').matches
    }

    private openWindow(shortcut: ShortcutWindow) {
        if (this.activeWindow) {
            this.activeWindow.destroy();
        }

        const window = this.window.createComponent(WindowComponent);
        window.instance.name = shortcut.name;
        window.instance.appendComponent(shortcut.component);
        this.activeWindow = window;
    }

    protected onClick(shortcut: ShortcutWindow) {
        if (this.deviceIsDesktop()) return;
        this.openWindow(shortcut);
    }

    protected onDoubleClick(shortcut: ShortcutWindow) {
        if (!this.deviceIsDesktop()) return;
        this.openWindow(shortcut);
    }
}
