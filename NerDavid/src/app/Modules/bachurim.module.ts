import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BachurimTableComponent } from '../Bachurim/bachurim-table/bachurim-table.component';
import { BachurDetailsComponent } from '../Bachurim/bachur-details/bachur-details.component';
import { AddBachurComponent } from '../Bachurim/add-bachur/add-bachur.component';
import { BachurimDesktopComponent } from '../Bachurim/bachurim-desktop/bachurim-desktop.component';
import { BachurLimudDetailsComponent } from '../Bachurim/bachur-details/bachur-limud-details/bachur-limud-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayDataModule } from './display-data.module';
import { ShareModule } from './shared.module';
import {  RouterModule, Routes } from '@angular/router';

const routes:Routes=[
{path:'',component:BachurimDesktopComponent}
]


@NgModule({
  declarations: [
    BachurimTableComponent,
    BachurDetailsComponent,
    AddBachurComponent,
    BachurimDesktopComponent,
    BachurLimudDetailsComponent,

  ],
  imports: [
    CommonModule,
    ShareModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    DisplayDataModule
  ],
  exports:[
    BachurimTableComponent,
    BachurDetailsComponent,
    AddBachurComponent,
    BachurimDesktopComponent,
    BachurLimudDetailsComponent,

  ]
})
export class BachurimModule { }
