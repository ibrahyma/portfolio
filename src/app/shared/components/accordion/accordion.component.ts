import {Component, Input} from '@angular/core';
import {
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader
} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";
import {IconOutlineDirective} from "../../directives/icon-outline/icon-outline.directive";

@Component({
    selector: 'im-accordion',
    imports: [
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatIcon,
        IconOutlineDirective
    ],
    templateUrl: './accordion.component.html',
    styleUrl: './accordion.component.scss'
})
export class AccordionComponent {

    @Input() headerText!: string;
    @Input() materialIconName?: string;
    @Input() expanded?: string;
    @Input('icon-outlined') iconOutlined?: string;

}
