import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { PhonesComponent } from '../Bachurim/add-bachur/phones/phones.component';
import { LimudComponent } from '../Bachurim/limud/limud.component';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LimudComponent,
    PhonesComponent,
    AutocompleteComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
    ],
  exports:[
    MaterialModule,
    LimudComponent,
    PhonesComponent,
    AutocompleteComponent,
  ]
})
export class ShareModule { }
