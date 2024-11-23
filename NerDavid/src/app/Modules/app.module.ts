import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { routes } from '../app.routes';
import { SharedModule } from './shared.module';
import { BachurimTableComponent } from '../Bachurim/bachurim-table/bachurim-table.component';
import { DisplayDataComponent } from '../display-data/display-data.component';
import { BachurimDesktopComponent } from '../Bachurim/bachurim-desktop/bachurim-desktop.component';
import { AddBachurComponent } from '../Bachurim/add-bachur/add-bachur.component';
import { LimudComponent } from '../Bachurim/limud/limud.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { DisplayRowContent } from '../display-data/display-row-content.directive';
  


@NgModule({
  declarations: [
    AppComponent,
    BachurimTableComponent,
    DisplayDataComponent,
    BachurimDesktopComponent,
    AddBachurComponent,
    LimudComponent,
    DisplayRowContent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
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
