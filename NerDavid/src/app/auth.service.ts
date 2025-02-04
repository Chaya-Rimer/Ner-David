import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    const decodedToken: any = jwtDecode(token);
    const expirationDate = decodedToken.exp * 1000; // המרת שניות למילישניות
    const currentDate = new Date().getTime();
  
    if (currentDate < expirationDate) {
      return true; // הטוקן בתוקף
    } else {
      return false;
    }
  }
}
