import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'bachurim',children:[
        {path:'',redirectTo:'yeshivaGdola',pathMatch:"full"},
        {path:'yeshivaGdola',loadChildren:()=>import('./Modules/bachurim.module').then(m=>m.BachurimModule)},
        {path:'yeshivaKtana',loadChildren:()=>import('./Modules/yeshiva-ktana.module').then(m=>m.YeshivaKtanaModule)},
    ]}

];
