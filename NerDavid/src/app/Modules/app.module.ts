import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BachurimModule } from './bachurim.module';
import { YeshivaKtanaModule } from './yeshiva-ktana.module';
import { DisplayDataModule } from './display-data.module';
import { LoginComponent } from '../login/login.component';
import { TabsComponent } from '../tabs/tabs.component';
  



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BachurimModule,
    YeshivaKtanaModule,
    DisplayDataModule
  ],
  bootstrap:[
    AppComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
