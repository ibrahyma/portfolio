import {Component, Input, OnInit} from '@angular/core';
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";
import {IconOutlineDirective} from "../../directives/icon-outline/icon-outline.directive";
import {ButtonComponent} from "../button/button.component";

@Component({
    selector: 'im-accordion',
    imports: [
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatIcon,
        IconOutlineDirective,
        ButtonComponent
    ],
    templateUrl: './accordion.component.html',
    styleUrl: './accordion.component.scss'
})
export class AccordionComponent implements OnInit{

    @Input() materialIconName?: string;
    @Input() expanded?: string;
    @Input('header-text') headerText!: string;
    @Input('icon-outlined') iconOutlined?: string;
    @Input('button-text') buttonText?: string;
    @Input('button-link') buttonLink?: string;
    @Input('button-onClick') buttonOnClick?: () => void;

    ngOnInit() {
        if (this.buttonTextExistsButNoAction()) {
            throw new Error('Button text provided but no link or onClick function provided');
        }
        if (this.buttonLinkAndActionProvided()) {
            throw new Error('Cannot provide both a link and an onClick function.');
        }
    }

    private buttonTextExistsButNoAction() {
        return this.buttonText && (!this.buttonLink && this.buttonOnClick === undefined);
    }

    private buttonLinkAndActionProvided() {
        return this.buttonLink && this.buttonOnClick !== undefined;
    }

}
