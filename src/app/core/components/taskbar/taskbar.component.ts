import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CustomableLogoComponent} from "../../../shared/components/customable-logo/customable-logo.component";
import {AppComponent} from "../../../app.component";

import packageJson from '../../../../../package.json';

@Component({
    selector: 'im-taskbar',
    templateUrl: './taskbar.component.html',
    imports: [
        CustomableLogoComponent
    ],
    styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit, OnDestroy {

    protected currentHour: string = '';

    private intervalId: any;
    protected currentDate: string = '';
    protected now: Date = new Date();
    private appComponent = inject(AppComponent);

    ngOnInit() {
        this.updateDateTime();
        this.intervalId = setInterval(() => this.updateDateTime(), 1000);
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    private updateDateTime(): void {
        this.now = new Date();
        this.currentHour = this.formatTime(this.now);
        this.currentDate = this.formatDate(this.now);
    }

    private formatTime(date: Date): string {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    private formatDate(date: Date): string {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    mainButtonClickHandler() {
        this.appComponent.appendAlert(
            'Portfolio IM',
            `Version actuelle ${packageJson.version}.`,
            [
                {
                    text: 'Fermer',
                    action: () => {
                        this.appComponent.clearAlert();
                    }
                }
            ])
    }
}
