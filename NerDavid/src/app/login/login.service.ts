import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ILogin } from './ILogin';
import { IPerson } from './IPerson';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'https://localhost:7178/Login/'
  loggedIn:boolean=false;
  constructor(private http: HttpClient, private router: Router) { }
  private _snackBar = inject(MatSnackBar);
  // register(model:ILogin):Observable<string>{
  //   this.http.post<string>(this.url + "Register", model);
  // }
  login(model: ILogin) {
     this.http.post<IPerson>(this.url + "Login", model).subscribe(
      x => {
        console.log(x, "per");
        localStorage.setItem('userName', x.firstName + " " + x.lastName);
        localStorage.setItem('token', x.token);
        this.loggedIn=true
        this.router.navigate(['/bachurim']);
      },
      error => {
        this._snackBar.open(error.error, 'אישור', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          // panelClass: ['custom-snackbar']
        });
      }
    )
  }
  get isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false; // לשים את המשתנה ל-false כאשר מתנתבים לעמוד הלוגין
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}