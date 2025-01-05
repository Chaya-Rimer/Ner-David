import { Component, EventEmitter, Input, Output, output, SimpleChange, SimpleChanges } from '@angular/core';
import { BachurimTableService } from '../Bachurim/bachurim-table/bachurim-table.service';
import { IbachurimTable } from '../Bachurim/bachurim-table/IBachurimTable';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IFilterData } from './IFilterData';

@Component({
  selector: 'nd-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() columnName!: any;
  @Input() dataSource!: any[];
  allSelected: boolean = false;
  dataFilter: IFilterData[] = [];
  show: boolean = false;
  isStatus: boolean = false;
  @Output() filtered = new EventEmitter<{ filter: string[], columnName: string }>();
  constructor() { }

  ngOnChanges(change: SimpleChanges): void {
    if (change['columnName'] && change['dataSource']) {
      if (this.columnName == "status")
        this.isStatus = true;
      const uniqueValues = new Set(this.dataSource.map(item => item[this.columnName]).filter(value => value !== undefined && value != null));
      this.dataFilter = Array.from(uniqueValues).map(x => ({ data: x, checked: false }))
    };
  }
  isSearch() {
    this.show = !this.show
  }

  filter() {
    const filter: string[] = this.dataFilter.filter(x => x.checked == true).map(x => x.data);
    this.filtered.emit({ filter: filter, columnName: this.columnName })
    this.show = !this.show
  }
  selectAll() {
    this.dataFilter.forEach(x => x.checked = this.allSelected);
  }
}
