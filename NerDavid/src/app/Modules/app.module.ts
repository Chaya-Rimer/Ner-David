import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { routes } from '../app.routes';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BachurimTableComponent } from '../Bachurim/bachurim-table/bachurim-table.component';
import { BachurimDesktopComponent } from '../Bachurim/bachurim-desktop/bachurim-desktop.component';
import { DisplayDataComponent } from '../display-data/display-data.component';
import { LimudComponent } from '../Bachurim/limud/limud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayRowContent } from '../display-data/display-row-content.directive';
import { AddBachurComponent } from '../Bachurim/add-bachur/add-bachur.component';
import { BachurDetailsComponent } from '../Bachurim/bachur-details/bachur-details.component';
  



@NgModule({
  declarations: [
    AppComponent,
    BachurimTableComponent,
    BachurDetailsComponent,
    DisplayDataComponent,
    AddBachurComponent,
    LimudComponent,
    DisplayRowContent,
    AddBachurComponent,
    BachurimDesktopComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap:[
    AppComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
