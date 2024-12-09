import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ייבוא כל הרכיבים של PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabMenuModule } from 'primeng/tabmenu';

// הוסף כאן רכיבים נוספים לפי הצורך

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    TableModule,
    DialogModule,
    ToastModule,
    InputTextareaModule,
    TabMenuModule
    // הוסף כאן רכיבים נוספים לפי הצורך
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    TableModule,
    DialogModule,
    ToastModule,
    InputTextareaModule,
    TabMenuModule
    // הוסף כאן רכיבים נוספים לפי הצורך
  ]
})
export class PrimeNgModule { }
