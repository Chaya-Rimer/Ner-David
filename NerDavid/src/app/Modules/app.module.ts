import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { routes } from '../app.routes';
import { SharedModule } from './shared.module';
import { BachurimTableComponent } from '../Bachurim/bachurim-table/bachurim-table.component';
import { BachurimDesktopComponent } from '../Bachurim/bachurim-desktop/bachurim-desktop.component';
import { DisplayDataComponent } from '../display-data/display-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBachurComponent } from '../Bachurim/add-bachur/add-bachur.component';
import { BachurDetailsComponent } from '../Bachurim/bachur-details/bachur-details.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { DisplayRowContent } from '../display-data/display-row-content.directive';
import { LimudComponent } from '../Bachurim/add-bachur/limud/limud.component';
import { PhonesComponent } from '../Bachurim/add-bachur/phones/phones.component';


@NgModule({
  declarations: [
    AppComponent,
    BachurimTableComponent,
    BachurDetailsComponent,
    DisplayDataComponent,
    BachurimDesktopComponent,
    AddBachurComponent,
    DisplayRowContent,
    LimudComponent,
    PhonesComponent
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
  exports:[
    DisplayRowContent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
