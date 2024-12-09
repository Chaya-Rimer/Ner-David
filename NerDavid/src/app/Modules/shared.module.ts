import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './primeng.module';
// import { MaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule
    ],
  exports:[
    MaterialModule,
    PrimeNgModule
    ]
})
export class SharedModule { }
