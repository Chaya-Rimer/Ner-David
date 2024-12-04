
import { Component, contentChild, ContentChild, ContentChildren, input, Input, QueryList, SimpleChange, SimpleChanges, TemplateRef } from '@angular/core';
import { DisplayDataService } from './display-data.service';
import { IDisplayData } from './IDisplayData';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { IbachurimTable } from '../Bachurim/bachurim-table/IBachurimTable';
import { MatTableDataSource } from '@angular/material/table';
import { DISPLAY_ROW_CONTENT, DisplayRowContent } from './display-row-content.directive';
import { read } from 'fs';
import { INNER_ROW_COMPONENT, InnerRowComponent } from './inner-row-component.directive';
import { AddBachurComponent } from '../Bachurim/add-bachur/add-bachur.component';
import { DISPLAY_ROW_ACTION, DisplayRowAction } from './display-row-action.directive';


@Component({
  selector: 'nd-display-data',
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      // transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ],
})
export class DisplayDataComponent {
  @Input() data!: any[]
  dataSource = new MatTableDataSource<any>();

  // dataSource = new MatTableDataSource<any>(); 
  @Input() displayDataType!: number;
  allSelected: boolean = false;
  @Input() columnClass!: (columnName: string, element: any) => any;
  @Input() disabled: any = (element: any) => false;
  @Input() compareFunc: (element: any, expanded: any) => Boolean = (x, y) => x == y;
  @Input() isExpanded!: any;
  @Input() selectable:boolean=false;
  expandedElement: any | null | undefined;
  columnsToDisplay!: IDisplayData[];
  columns: string[] = []
  @Input() disSelectColumn = (element: any) => false;
  @Input() tableClass!: 'fill-table' | 'line-table';
  @Input() isSameColumn=(element:any)=>false;
  @ContentChild(DISPLAY_ROW_CONTENT, { read: TemplateRef, static: true }) contentTemplate!: TemplateRef<DisplayRowContent>;
  @ContentChildren(INNER_ROW_COMPONENT) innerComponents!: QueryList<InnerRowComponent>;  
  @ContentChild(DISPLAY_ROW_ACTION, { read: TemplateRef, static: true }) actionTemplate!: TemplateRef<DisplayRowAction>;
  
  constructor(private _displayService: DisplayDataService) { }
  ngOnInit() {
    this._displayService.getColumnsToTable(this.displayDataType).subscribe(x => {
      this.columnsToDisplay = x;
      this.columns = [...this.columnsToDisplay.map(x => x.columns)];
      if (this.isExpanded)
        this.columns = [...this.columns, 'expand'];
      if(this.actionTemplate!=undefined){
        this.columns = [...this.columns,'action'];
      }
      
    }
    )
  }

  ngOnChanges(changes:SimpleChanges) {
    this.setDataSource();
  }
  setDataSource() {
    this.dataSource = new MatTableDataSource(this.data);
  }
  getComponent(name: string): TemplateRef<any> | null {
    let temp = this.innerComponents.find(x=>x.innerRowComponent==name);
    if (temp)
        return temp.template;
    return null;
}

    selectAll() {
      this.data.forEach(x => x.select = !this.disSelectColumn(x) && this.allSelected);
  }

}
