import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLogin!:boolean;

  constructor(public _authService:AuthService) { }

  ngOnInit() {
    this.isLogin=this._loginServce.isLoggedIn;
  }
}
