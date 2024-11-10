import { Component } from '@angular/core';
import { BachurimTableService } from './bachurim-table.service';
import { IbachurimTable } from './IBachurimTable';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-bachurim-table',
  templateUrl: './bachurim-table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrl: './bachurim-table.component.scss'
})
export class BachurimTableComponent {
  constructor(private BachurimTableSer: BachurimTableService) { }
  dataSource: IbachurimTable[] = []
  expandedElement: IbachurimTable | null|undefined;
  columnsToDisplay = [ 'bachurId','firstName','lastName','cityId','adress',
    'phone1','phone2','phone3','yeshivaId','shiurId' ]
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  ngOnInit() {
    this.BachurimTableSer.getBachurim().subscribe(x => this.dataSource = x)
  }

}
