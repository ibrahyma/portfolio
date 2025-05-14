import {Component, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
    selector: 'im-cto-long-card',
    imports: [
        ButtonComponent
    ],
    templateUrl: './cto-long-card.component.html',
    styleUrl: './cto-long-card.component.scss'
})
export class CtoLongCardComponent {

    @Input() mainText!: string;
    @Input() secondaryText!: string;

}
