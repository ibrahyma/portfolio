import {Component, Input} from '@angular/core';

@Component({
    selector: 'im-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {

    @Input() title!: string;
    @Input() caption?: string;

}
