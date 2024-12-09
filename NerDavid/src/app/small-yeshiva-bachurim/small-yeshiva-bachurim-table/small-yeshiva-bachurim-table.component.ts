import { Component } from '@angular/core';
import { IbachurimTable } from '../../Bachurim/bachurim-table/IBachurimTable';
import { BachurimTableService } from '../../Bachurim/bachurim-table/bachurim-table.service';

@Component({
  selector: 'nd-small-yeshiva-bachurim-table',
  templateUrl: './small-yeshiva-bachurim-table.component.html',
  styleUrl: './small-yeshiva-bachurim-table.component.scss'
})
export class SmallYeshivaBachurimTableComponent {
  dataSource: IbachurimTable[] =[]
  filterData:IbachurimTable[]=[]

  constructor(private BachurimTableSer:BachurimTableService){}
  ngOnInit(){
    this.BachurimTableSer.getBachurimTable(2).subscribe(x => {
      this.dataSource = x;
      this.filterData = x;
  })
  }
}
