import {Component, Input} from '@angular/core';

@Component({
  selector: 'im-customable-folder-icon',
  imports: [],
  templateUrl: './customable-folder-icon.component.html',
  styleUrl: './customable-folder-icon.component.scss'
})
export class CustomableFolderIconComponent {
    @Input() size: number = 100;
    @Input() frontColor: string = "#E8E8E8";
    @Input() shadowColor: string = "#989898";

}
