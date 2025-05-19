import {Component, ElementRef, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {CdkDrag, CdkDragHandle} from "@angular/cdk/drag-drop";
import {ResizableDirective} from "../../../shared/directives/resizable/resizable.directive";
import {FirstLetterCasePipe} from "../../../shared/pipes/first-letter-case.pipe";

@Component({
  selector: 'im-window',
    imports: [
        CdkDrag,
        CdkDragHandle,
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
