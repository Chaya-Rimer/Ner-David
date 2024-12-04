import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { BachurimTableService } from '../Bachurim/bachurim-table/bachurim-table.service';
import { IbachurimTable } from '../Bachurim/bachurim-table/IBachurimTable';

@Component({
  selector: 'nd-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() dataFilter: string = {} as string;
  filterData!: any[];
  show: boolean = false;
  extractedFields: any = {};
  constructor(private _bachurimTableSer: BachurimTableService) { }

  ngOnChanges(change: SimpleChanges): void {
    debugger;
    if (change['dataFilter']) {
      this._bachurimTableSer.getBachurimTable().subscribe(x => {
        debugger;
        // this.filterData=x.map(obj => {
        //   Object.keys(obj).forEach(key => {
        //     if (key === this.dataFilter) {
        //       this.extractedFields[key] = obj[key];
        //     }
        //   });
        //   return this.extractedFields;
        // });

        console.log(this.extractedFields, "שדות");
      })
    };
  }
  isSearch() {
    this.show = !this.show
  }
  filter() {

  }
  selectAll() {

  }
}
