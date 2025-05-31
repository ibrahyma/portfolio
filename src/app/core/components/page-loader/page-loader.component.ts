import { Component } from '@angular/core';
import {CustomableLogoComponent} from "../../../shared/components/customable-logo/customable-logo.component";

@Component({
  selector: 'im-page-loader',
  imports: [
    CustomableLogoComponent
  ],
  templateUrl: './page-loader.component.html',
  styleUrl: './page-loader.component.scss'
})
export class PageLoaderComponent {}
