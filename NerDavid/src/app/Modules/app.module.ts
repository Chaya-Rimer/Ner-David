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
import { DisplayDataComponent } from '../display-data/display-data.component';
import { AddBachurComponent } from '../Bachurim/add-bachur/add-bachur.component';
import { BachurimTableComponent } from '../Bachurim/bachurim-table/bachurim-table.component';
import { BachurimDesktopComponent } from '../Bachurim/bachurim-desktop/bachurim-desktop.component';
import { BachurDetailsComponent } from '../Bachurim/bachur-details/bachur-details.component';



@NgModule({
  declarations: [
    AppComponent,
    BachurimTableComponent,
    BachurDetailsComponent
    DisplayDataComponent,
    BachurimDesktopComponent,
    AddBachurComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SharedModule
    
  ],
  bootstrap:[
    AppComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
