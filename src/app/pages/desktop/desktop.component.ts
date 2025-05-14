import {Component, ComponentRef, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {TaskbarComponent} from "../../core/components/taskbar/taskbar.component";
import {
    CustomableFolderIconComponent
} from "../../shared/components/customable-folder-icon/customable-folder-icon.component";
import {AboutComponent} from "../windows/about/about.component";
import {CdkDrag} from "@angular/cdk/drag-drop";

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
export class DesktopComponent implements OnInit {
    @ViewChild("window", {read: ViewContainerRef, static: true})
    window!: ViewContainerRef;

    activeWindow?: ComponentRef<any>;

    ngOnInit() {
        this.openWindow(AboutComponent)
    }

    shortcuts: ShortcutWindow[] = [
        {
            name: 'À propos',
            id: 'about',
            color: '#88CCFF',
            shadowColor: '#224488',
            action: () => this.openWindow(AboutComponent)
        },
        {
            name: 'Compétences',
            id: 'competences',
            color: '#FFCC88',
            shadowColor: '#442211',
            action: function () {
                console.log(`${this.id} action triggered`);
            }
        },
        {
            name: 'Formation',
            id: 'formation',
            color: '#80E880',
            shadowColor: '#116611',
            action: function () {
                console.log(`${this.id} action triggered`);
            }
        },
        {
            name: 'Expérience',
            id: 'experience',
            color: '#FF6060',
            shadowColor: '#221111',
            action: function () {
                console.log(`${this.id} action triggered`);
            }
        },
        {
            name: 'Projets',
            id: 'projets',
            color: '#CC88FF',
            shadowColor: '#441122',
            action: function () {
                console.log(`${this.id} action triggered`);
            }
        },
        {
            name: 'Contact',
            id: 'contact',
            color: '#FFA858',
            shadowColor: '#442211',
            action: function () {
                console.log(`${this.id} action triggered`);
            }
        }
    ];


    private openWindow(component: Type<any>) {
        if (this.activeWindow) {
            this.activeWindow.destroy();
        }

        this.activeWindow = this.window.createComponent(component);
    }
}

interface ShortcutWindow {
    id: string;
    name: string;
    color: string;
    shadowColor: string;
    action: () => any;
}
