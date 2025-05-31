import {Component, inject, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {AppComponent} from "../../../app.component";
import {CdkDrag, CdkDragHandle} from "@angular/cdk/drag-drop";

@Component({
    selector: 'im-alert',
    templateUrl: './alert.component.html',
    imports: [
        ButtonComponent,
        CdkDrag,
        CdkDragHandle
    ],
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

    @Input() title!: string;
    @Input() description!: string;
    @Input() buttons: { text: string, action: () => void }[] = [];
    private appComponent = inject(AppComponent);

    close() {
        this.appComponent.clearAlert();
    }
}
