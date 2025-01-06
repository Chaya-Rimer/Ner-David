import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { IbachurimTable } from '../bachurim-table/IBachurimTable';
import { MatDialog } from '@angular/material/dialog';
import { AddBachurComponent } from '../add-bachur/add-bachur.component';
import { BachurimService } from '../bachurim.service';
import { INewEditBachur } from '../IBachurim';

@Component({
  selector: 'nd-bachur-details',
  templateUrl: './bachur-details.component.html',
  styleUrl: './bachur-details.component.scss'
})
export class BachurDetailsComponent {
  readonly dialog = inject(MatDialog);
  @Input() bachurId!: number;
  bachurDetails!:INewEditBachur;
  constructor(private _bachurSer: BachurimService) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['bachurId']) {
     this._bachurSer.getBachurDetail(this.bachurId).subscribe(x=>{
      this.bachurDetails=x,
      console.log(this.bachurDetails,"detail");
     })
    }
  }
  openDialog() {
    this._bachurSer.openNewBachurDialog(this.bachurDetails);
  }
}
