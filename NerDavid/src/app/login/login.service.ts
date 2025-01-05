import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ILogin } from './ILogin';
import { Observable } from 'rxjs';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'https://localhost:7178/Login/'

  constructor(private http: HttpClient, private router: Router) { }
  private _snackBar = inject(MatSnackBar);

  login(model: ILogin) {
    this.http.post<ILogin>(this.url + "Login", model).subscribe(x => {

      localStorage.setItem('token', x.token),
        console.log(localStorage.getItem('token'), "tokennnnn");
      this.router.navigate(['/bachurim'])
    },
      error => {
        this._snackBar.open(error.error, 'אישור', {
          // duration: 3000,
          horizontalPosition:'start',
          verticalPosition:'bottom',
          panelClass: ['custom-snackbar']
        });
      });
  }
}
