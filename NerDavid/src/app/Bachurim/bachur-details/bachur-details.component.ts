import { Component, Input, inject } from '@angular/core';
import { IbachurimTable } from '../bachurim-table/IBachurimTable';
import { MatDialog } from '@angular/material/dialog';
import { AddBachurComponent } from '../add-bachur/add-bachur.component';

@Component({
  selector: 'nd-bachur-details',
  templateUrl: './bachur-details.component.html',
  styleUrl: './bachur-details.component.scss'
})
export class BachurDetailsComponent {
  @Input() bachurDetails!:IbachurimTable;
  
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(AddBachurComponent, {
      width: '800px',
      height:'550px',
      data: {
      },
     
    });
  }
}
