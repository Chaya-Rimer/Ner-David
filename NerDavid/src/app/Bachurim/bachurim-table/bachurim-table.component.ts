import { Component } from '@angular/core';
import { BachurimTableService } from './bachurim-table.service';
import { IbachurimTable } from './IBachurimTable';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-bachurim-table',
  templateUrl: './bachurim-table.component.html',
  styleUrl: './bachurim-table.component.scss'
})
export class BachurimTableComponent {
  constructor(private BachurimTableSer: BachurimTableService) { }
  dataSource: IbachurimTable[] = []
  ngOnInit() {
    this.BachurimTableSer.getBachurimTable().subscribe(x => this.dataSource = x)
    }
  }


