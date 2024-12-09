import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YeshivaKtanaDesktopComponent } from '../yeshiva-ktana-desktop/yeshiva-ktana-desktop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from './shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:YeshivaKtanaDesktopComponent}
]
@NgModule({
  declarations: [
    YeshivaKtanaDesktopComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    ShareModule
  ],
  exports: [
    YeshivaKtanaDesktopComponent
  ]
})
export class YeshivaKtanaModule { }
