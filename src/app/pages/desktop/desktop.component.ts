import { Component } from '@angular/core';
import {TaskbarComponent} from "../../core/components/taskbar/taskbar.component";
import {NgOptimizedImage} from "@angular/common";
import {
  CustomableFolderIconComponent
} from "../../shared/components/customable-folder-icon/customable-folder-icon.component";

@Component({
  selector: 'app-desktop',
  imports: [
    TaskbarComponent,
    CustomableFolderIconComponent
  ],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {
  shortcuts: ShortcutWindow[] = [
    {
      name: 'À propos',
      color: '#88CCFF',
      shadowColor: '#224488',
      action: () => {
        console.log('À propos action triggered');
      }
    },
    {
      name: 'Compétences',
      color: '#FFCC88',
      shadowColor: '#442211',
      action: () => {
        console.log('Compétences action triggered');
      }
    },
    {
      name: 'Formation',
      color: '#80E880',
      shadowColor: '#116611',
      action: () => {
        console.log('Formation action triggered');
      }
    },
    {
      name: 'Expérience',
      color: '#FF6060',
      shadowColor: '#221111',
      action: () => {
        console.log('Expérience action triggered');
      }
    },
    {
      name: 'Projets',
      color: '#CC88FF',
      shadowColor: '#441122',
      action: () => {
        console.log('Projets action triggered');
      }
    },
    {
      name: 'Contact',
      color: '#FFA858',
      shadowColor: '#442211',
      action: () => {
        console.log('Contact action triggered');
      }
    }
  ];

}

interface ShortcutWindow {
  name: string;
  color: string;
  shadowColor: string;
  action: () => void;
}
