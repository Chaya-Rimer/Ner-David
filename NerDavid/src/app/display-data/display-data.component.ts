import { Component, Input } from '@angular/core';
import { DisplayDataService } from './display-data.service';
import { IDisplayData } from './IDisplayData';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'nd-display-data',
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DisplayDataComponent {
  @Input() dataSource: any;
  @Input() displayDataType!: number;
  expandedElement: any | null | undefined;
  columnsToDisplay!: IDisplayData[];
  columnsToDisplayWithExpand:any[]=[]
  constructor(private _displayService: DisplayDataService) {}
  ngOnInit() {
    this._displayService.getColumnsToTable(this.displayDataType).subscribe(x =>{
      this.columnsToDisplay = x,
      this.columnsToDisplayWithExpand = [...this.columnsToDisplay.map(x=>x.columns),'expand'] ;

    })
  }
  

}
