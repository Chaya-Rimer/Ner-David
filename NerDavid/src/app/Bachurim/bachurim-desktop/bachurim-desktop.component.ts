import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBachurComponent } from '../add-bachur/add-bachur.component';

@Component({
  selector: 'nd-bachurim-desktop',
  templateUrl: './bachurim-desktop.component.html',
  styleUrl: './bachurim-desktop.component.scss'
})
export class BachurimDesktopComponent {
  readonly dialog = inject(MatDialog);

 constructor(){}
 openDialog() {
  this.dialog.open(AddBachurComponent, {
    width: '800px',
    height:'550px',
  });
}
}
