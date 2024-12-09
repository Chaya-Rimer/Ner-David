import { Component, Input, SimpleChanges } from '@angular/core';
import { BachurimTableService } from './bachurim-table.service';
import { IbachurimTable } from './IBachurimTable';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
    this.BachurimTableSer.getBachurimTable(1).subscribe(x => {
      this.dataSource = x;
      // this.filterData = x;
  })
  }
  // ngOnChanges(change:SimpleChanges):void{
  //   if(change['searchTerm']){
  //     this.filterData = this.dataSource.filter(x=>{
  //       const fullName = (x.firstName?x.firstName+" ":"") + (x.lastName?x.lastName:"")
  //       return fullName?.includes(this.searchTerm)
  //     })
  //   }
  // }

}


