import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLogin!:boolean;

  constructor(public _authService:AuthService) { }

  ngOnInit() {
    console.log("isLogin", this.isLogin);
    
    this.isLogin = this._authService.isAuthenticated();
  }
}
