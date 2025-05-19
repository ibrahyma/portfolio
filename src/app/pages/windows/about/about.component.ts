import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
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
export class AboutComponent {

    @ViewChild("about", {static: true})
    about!: ElementRef<HTMLElement>;

    resizeState = {
        resizing: false,
        direction: '',
        startX: 0,
        startY: 0,
        startHeight: 0,
        startWidth: 0,
        startTop: 0,
        startLeft: 0
    };

    onResize($event: MouseEvent, direction: string) {
        $event.preventDefault();
        $event.stopPropagation();

        this.resizeState.resizing = true;
        this.resizeState.direction = direction;

        const rect = this.about.nativeElement.getBoundingClientRect();
        this.resizeState.startX = $event.clientX;
        this.resizeState.startY = $event.clientY;
        this.resizeState.startHeight = rect.height;
        this.resizeState.startWidth = rect.width;
        this.resizeState.startTop = rect.top;
        this.resizeState.startLeft = rect.left;
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove($event: MouseEvent) {
        if (!this.resizeState.resizing) return;

        const deltaX = $event.clientX - this.resizeState.startX;
        const deltaY = $event.clientY - this.resizeState.startY;
        const element = this.about.nativeElement;
        const style = element.style;

        if (this.resizeState.direction.includes('right')) {
            style.width = `${this.resizeState.startWidth + deltaX}px`;
        }

        if (this.resizeState.direction.includes('left')) {
            style.width = `${this.resizeState.startWidth - deltaX}px`;
            style.left = `${this.resizeState.startLeft + deltaX}px`;
        }

        if (this.resizeState.direction.includes('bottom')) {
            style.height = `${this.resizeState.startHeight + deltaY}px`;
        }

        if (this.resizeState.direction.includes('top')) {
            style.height = `${this.resizeState.startHeight - deltaY}px`;
            style.top = `${this.resizeState.startTop + deltaY}px`;
        }
    }

    @HostListener("document:mouseup")
    onMouseUp() {
        this.resizeState.resizing = false;
    }

    onClose() {
        this.about.nativeElement.style.display = 'none';
    }
}
