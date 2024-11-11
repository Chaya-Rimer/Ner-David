import { Component, Input } from '@angular/core';
import { DisplayDataService } from './display-data.service';
import { IDisplayData } from './IDisplayData';

@Component({
  selector: 'nd-display-data',
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss'
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
