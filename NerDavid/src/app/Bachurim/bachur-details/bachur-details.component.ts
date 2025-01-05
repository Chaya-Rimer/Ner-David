import { Component, Input, inject } from '@angular/core';
import { IbachurimTable } from '../bachurim-table/IBachurimTable';
import { MatDialog } from '@angular/material/dialog';
import { AddBachurComponent } from '../add-bachur/add-bachur.component';
import { BachurimService } from '../bachurim.service';

@Component({
  selector: 'nd-bachur-details',
  templateUrl: './bachur-details.component.html',
  styleUrl: './bachur-details.component.scss'
})
export class BachurDetailsComponent {
  @Input() bachurDetails!: IbachurimTable;
  constructor(private _bachurSer: BachurimService) { }
  readonly dialog = inject(MatDialog);
  openDialog() {
    this._bachurSer.openNewBachurDialog(this.bachurDetails);
  }
}
