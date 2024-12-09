import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDataComponent } from '../display-data/display-data.component';
import { DisplayRowContent } from '../display-data/display-row-content.directive';
import { InnerRowComponent } from '../display-data/inner-row-component.directive';
import { DisplayRowAction } from '../display-data/display-row-action.directive';
import { FilterComponent } from '../filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from './shared.module';



@NgModule({
  declarations: [
    DisplayDataComponent,
    DisplayRowContent,
    InnerRowComponent,
    DisplayRowAction,
    FilterComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    DisplayDataComponent,
    DisplayRowContent,
    InnerRowComponent,
    DisplayRowAction,
    FilterComponent
  ]
})
export class DisplayDataModule { }
