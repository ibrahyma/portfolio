import {Component, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
    selector: 'im-cta-long-card',
    imports: [
        ButtonComponent
    ],
    templateUrl: './cta-long-card.component.html',
    styleUrl: './cta-long-card.component.scss'
})
export class CtaLongCardComponent {

    @Input() mainText!: string;
    @Input() secondaryText!: string;

}
