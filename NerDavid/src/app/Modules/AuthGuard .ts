import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    debugger;
    const token = localStorage.getItem('token');
    if (this._authService.isAuthenticated()) {
      return true;
    } 
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
