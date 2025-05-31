import {Directive, ElementRef, HostListener, inject} from '@angular/core';

interface ResizeState {
    resizing: boolean;
    direction: string;
    startX: number;
    startY: number;
    startHeight: number;
    startWidth: number;
    startTop: number;
    startLeft: number;
}

@Directive({
    selector: '[resizable]'
})
export class ResizableDirective {

    private element = inject(ElementRef);

    private readonly resizableTemplate = `
        <div class="resize-handle top"></div>
        <div class="resize-handle right"></div>
        <div class="resize-handle bottom"></div>
        <div class="resize-handle left"></div>
        <div class="resize-handle top-left"></div>
        <div class="resize-handle top-right"></div>
        <div class="resize-handle bottom-left"></div>
        <div class="resize-handle bottom-right"></div>
    `;

    private readonly resizableStyles = `
        .resize-handle {
                position: absolute;
                z-index: 10;
            }
            
            .top, .bottom {
                height: 10px;
                left: 0;
                right: 0;
                cursor: ns-resize;
            }
            .top { top: -5px; }
            .bottom { bottom: -5px; }
            
            .left, .right {
                width: 10px;
                top: 0;
                bottom: 0;
                cursor: ew-resize;
            }
            .left { left: -5px; }
            .right { right: -5px; }
            
            .top-left, .top-right, .bottom-left, .bottom-right {
                width: 10px;
                height: 10px;
            }
            
            .top-left {
                top: -5px;
                left: -5px;
                cursor: nwse-resize;
            }
            
            .top-right {
                top: -5px;
                right: -5px;
                cursor: nesw-resize;
            }
            
            .bottom-left {
                bottom: -5px;
                left: -5px;
                cursor: nesw-resize;
            }
            
            .bottom-right {
                bottom: -5px;
                right: -5px;
                cursor: nwse-resize;
            }
    `;

    private resizeState: ResizeState = {
        resizing: false,
        direction: '',
        startX: 0,
        startY: 0,
        startHeight: 0,
        startWidth: 0,
        startTop: 0,
        startLeft: 0
    };

    constructor() {
        this.loadResizableTemplateAndStyles();
    }


    onResize($event: MouseEvent, direction: string) {
        $event.preventDefault();
        $event.stopPropagation();

        this.resizeState.resizing = true;
        this.resizeState.direction = direction;

        const rect = this.element.nativeElement.getBoundingClientRect();
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

        if (this.resizeState.direction.includes('bottom')) {
            this.element.nativeElement.style.height = `${this.resizeState.startHeight + deltaY}px`;
        }
        else if (this.resizeState.direction.includes('top')) {
            this.element.nativeElement.style.height = `${this.resizeState.startHeight - deltaY}px`;
        }

        if (this.resizeState.direction.includes('right')) {
            this.element.nativeElement.style.width = `${this.resizeState.startWidth + deltaX}px`;
        }
        else if (this.resizeState.direction.includes('left')) {
            this.element.nativeElement.style.width = `${this.resizeState.startWidth - deltaX}px`;
        }
    }

    @HostListener("document:mouseup")
    onMouseUp() {
        this.resizeState.resizing = false;
    }

    private loadResizableTemplateAndStyles() {
        this.element.nativeElement.innerHTML += this.resizableTemplate;

        this.element.nativeElement.querySelectorAll('.resize-handle').forEach((el: HTMLElement) => {
            el.addEventListener('mousedown', ($event: MouseEvent) => {
                const direction = el.classList[1];
                this.onResize($event, direction);
            });
        })

        const style = document.createElement('style');
        style.innerHTML = this.resizableStyles;
        document.head.appendChild(style);
    }
}
