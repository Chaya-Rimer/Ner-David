import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'nd-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  username!:string;
 constructor(private _loginService:LoginService){}
 ngOnInit(){
 this.username= localStorage.getItem('userName')!
 }
 logOut(){
this._loginService.logout();
 }
}
