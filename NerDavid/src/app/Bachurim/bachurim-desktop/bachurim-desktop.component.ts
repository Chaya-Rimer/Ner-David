import { Component, inject, ViewChild, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBachurComponent } from '../add-bachur/add-bachur.component';
import { BachurimTableComponent } from '../bachurim-table/bachurim-table.component';


@Component({
  selector: 'nd-bachurim-desktop',
  templateUrl: './bachurim-desktop.component.html',
  styleUrl: './bachurim-desktop.component.scss'
})
export class BachurimDesktopComponent {
  readonly dialog = inject(MatDialog);
  searchValue='';
  @ViewChild(BachurimTableComponent) bachurimTable:BachurimTableComponent ={}as BachurimTableComponent;

  constructor() { }

  ngOnInit() {
    
  }


  openDialog() {
    this.dialog.open(AddBachurComponent, {
      data: {
        animal: 'panda',
      },

    });
  }
}
