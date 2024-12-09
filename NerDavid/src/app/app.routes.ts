import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BachurimDesktopComponent } from './Bachurim/bachurim-desktop/bachurim-desktop.component';
import { SmallYeshivaBachurimComponent } from './small-yeshiva-bachurim/small-yeshiva-bachurim.component';

export const routes: Routes = [
    {path:'',component:AppComponent},
    // {path:'bachurim',component:BachurimDesktopComponent},
    // {path:'smallBachurim',component:SmallYeshivaBachurimComponent}

];
