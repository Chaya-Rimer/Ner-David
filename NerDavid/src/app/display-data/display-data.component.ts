
import { Component, contentChild, ContentChild, ContentChildren, input, Input, QueryList, SimpleChange, SimpleChanges, TemplateRef, viewChild, ViewChild } from '@angular/core';
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
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IFiltered } from '../filter/IFilterData';
import { filter } from 'rxjs';


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
  @Input() displayDataType!: number;
  allSelected: boolean = false;
  @Input() columnClass!: (columnName: string, element: any) => any;
  @Input() disabled: any = (element: any) => false;
  @Input() compareFunc: (element: any, expanded: any) => Boolean = (x, y) => x == y;
  @Input() isExpanded!: boolean;
  @Input() selectable: boolean = false;
  @Input() searchText!: string;
  expandedElement: any | null | undefined;
  columnsToDisplay!: IDisplayData[];
  columns: string[] = []
  filterData: any[] = []
  @Input() disSelectColumn = (element: any) => false;
  @Input() tableClass!: 'fill-table' | 'line-table';
  @Input() isSameColumn = (element: any) => false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
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
      if (this.actionTemplate != undefined) {
        this.columns = [...this.columns, 'action'];
      }
    }
    )

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.filterData = this.data;
      this.setDataSource();
    }
    if (changes['searchText']) {
      this.filterData = this.data.filter(x => Object.values(x).join(' ').includes(this.searchText))
      this.setDataSource()
    }

  }
  setFilter(event:any) {
    this.filterData = this.data.filter(x => event.filter.includes(x[event.columnName]))
    console.log(this.filterData,"fil");
    
    this.setDataSource();
    // this.dataSource = new MatTableDataSource(event);
  }
  setDataSource() {
    this.dataSource = new MatTableDataSource(this.filterData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }
  AfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort

  }
  getComponent(name: string): TemplateRef<any> | null {
    let temp = this.innerComponents.find(x => x.innerRowComponent == name);
    if (temp)
      return temp.template;
    return null;
  }

  selectAll() {
    this.data.forEach(x => x.select = !this.disSelectColumn(x) && this.allSelected);
  }

}
