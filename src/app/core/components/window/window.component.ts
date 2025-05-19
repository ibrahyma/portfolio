import {Component, ElementRef, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {AccordionComponent} from "../../../shared/components/accordion/accordion.component";
import {CardComponent} from "../../../shared/components/card/card.component";
import {CdkDrag, CdkDragHandle} from "@angular/cdk/drag-drop";
import {CtaLongCardComponent} from "../../../shared/components/cta-long-card/cta-long-card.component";
import {ResizableDirective} from "../../../shared/directives/resizable/resizable.directive";
import {FirstLetterCasePipe} from "../../../shared/pipes/first-letter-case.pipe";

@Component({
  selector: 'im-window',
    imports: [
        AccordionComponent,
        CardComponent,
        CdkDrag,
        CdkDragHandle,
        CtaLongCardComponent,
        ResizableDirective,
        FirstLetterCasePipe
    ],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss'
})
export class WindowComponent {
    @ViewChild("window", {static: true})
    window!: ElementRef<HTMLElement>;

    @ViewChild("container", {read: ViewContainerRef, static: true})
    container!: ViewContainerRef;

    @Input() name!: string;

    appendComponent(component: any) {
        this.container.clear();
        this.container.createComponent(component);
    }

    onClose() {
        this.window.nativeElement.style.display = 'none';
    }
}
