import {Component, ElementRef, Input, signal, ViewChild, ViewContainerRef} from '@angular/core';
import {CdkDrag, CdkDragHandle} from "@angular/cdk/drag-drop";
import {ResizableDirective} from "../../../shared/directives/resizable/resizable.directive";
import {FirstLetterCasePipe} from "../../../shared/pipes/first-letter-case.pipe";
import {NgClass} from "@angular/common";

@Component({
  selector: 'im-window',
    imports: [
        CdkDrag,
        CdkDragHandle,
        ResizableDirective,
        FirstLetterCasePipe,
        NgClass,
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

    isMaximized = signal(true);

    appendComponent(component: any) {
        this.container.clear();
        this.container.createComponent(component);
    }

    protected onClose() {
        this.window.nativeElement.style.display = 'none';
    }

    protected onMinimize() {
        this.isMaximized.set(false);
    }

    protected onMaximize() {
        this.isMaximized.set(true);
    }
}
