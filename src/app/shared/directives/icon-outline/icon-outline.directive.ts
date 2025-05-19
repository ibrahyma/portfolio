import {Directive, ElementRef, inject, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[icon-outline]'
})
export class IconOutlineDirective implements OnInit {

    private element = inject(ElementRef);
    @Input('icon-outline') iconOutline?: boolean;

    ngOnInit() {
        if (this.iconOutline) {
            this.element.nativeElement.classList.add("mat-icon-outline");
        }
    }

}
