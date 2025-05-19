import {Component} from '@angular/core';
import {AccordionComponent} from "../../../shared/components/accordion/accordion.component";

@Component({
  selector: 'app-school',
    imports: [
        AccordionComponent
    ],
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss'
})
export class SchoolComponent {}
