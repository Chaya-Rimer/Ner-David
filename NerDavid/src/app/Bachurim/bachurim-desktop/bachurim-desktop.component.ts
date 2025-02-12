import { ChangeDetectorRef, Component, inject, ViewChild, viewChild } from '@angular/core';
import { BachurimTableComponent } from '../bachurim-table/bachurim-table.component';
import { BachurimService } from '../bachurim.service';


@Component({
  selector: 'nd-bachurim-desktop',
  templateUrl: './bachurim-desktop.component.html',
  styleUrl: './bachurim-desktop.component.scss'
})
export class BachurimDesktopComponent {
  searchValue='';
  @ViewChild(BachurimTableComponent) bachurimTable:BachurimTableComponent ={}as BachurimTableComponent;

  constructor(private _bachurSer:BachurimService) { }
  ngOnInit() {
    
  }
  onSearchChange(event:any){
    this.searchValue=event.target.value;

  }

  openDialog() {
    this._bachurSer.openNewBachurDialog();
  }
    
}
