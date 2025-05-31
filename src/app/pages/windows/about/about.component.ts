import {Component} from '@angular/core';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CardComponent} from "../../../shared/components/card/card.component";
import {CtaLongCardComponent} from "../../../shared/components/cta-long-card/cta-long-card.component";
import {AccordionComponent} from "../../../shared/components/accordion/accordion.component";

@Component({
    selector: 'app-about',
    imports: [
        DragDropModule,
        CardComponent,
        CtaLongCardComponent,
        AccordionComponent
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {}
