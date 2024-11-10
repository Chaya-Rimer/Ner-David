import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialExampleModule } from './material.module';
// import { MaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialExampleModule
    ],
  exports:[
    MaterialExampleModule
    ]
})
export class SharedModule { }
