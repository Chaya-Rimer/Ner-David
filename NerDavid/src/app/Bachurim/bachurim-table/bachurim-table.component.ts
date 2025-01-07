import { Component, Input, SimpleChanges } from '@angular/core';
import { BachurimTableService } from './bachurim-table.service';
import { IbachurimTable } from './IBachurimTable';
import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-bachurim-table',
  templateUrl: './bachurim-table.component.html',
  styleUrl: './bachurim-table.component.scss'
})
export class BachurimTableComponent {
  @Input() searchTerm: string = '';
  constructor(private BachurimTableSer: BachurimTableService) { }
  dataSource: IbachurimTable[] =[]

  ngOnInit() {
    this.BachurimTableSer.getBachurimTable(1).subscribe(x =>{this.dataSource = x});
  }
  get isData():Boolean{
    return this.dataSource.length>0
  }
}


