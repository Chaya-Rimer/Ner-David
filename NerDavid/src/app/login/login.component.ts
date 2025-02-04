import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from './ILogin';
import { LoginService } from './login.service';

@Component({
  selector: 'nd-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = signal(true);
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false)
  })

  constructor(private _loginService:LoginService) { }

  ngOnInit() {
    
    // this._loginService.logout(); // לשים את המשתנה ל-false כאשר מתנתבים לעמוד הלוגין

    // // טען את הנתונים מה-localStorage
    // const savedUserName = localStorage.getItem('username');
    // const savedPassword = localStorage.getItem('password');
 
    // localStorage.removeItem('userName');
    // localStorage.removeItem('token');

    // if (savedUserName) {
    //   this.loginForm.patchValue({ userName: savedUserName });
    // }

    // if (savedPassword) {
    //   this.loginForm.patchValue({ password: savedPassword });
    //   this.loginForm.patchValue({ rememberMe: true }); // מסמן את תיבת הסימון
    // }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  // register(){
  //   const user: ILogin = this.loginForm.value;

  //    this._loginService.register(user).subscribe(x=>alert(x));
  // }
  login() {
    let user: ILogin={
      userName:this.loginForm.controls['userName'].value,
      password:this.loginForm.controls['password'].value,
    }

    // if (this.loginForm.controls['rememberMe'].value) {
    //   localStorage.setItem('username', user.userName);
    //   localStorage.setItem('password', user.password);
    // } else {
    //   localStorage.removeItem('username');
    //   localStorage.removeItem('password');
    // }


    this._loginService.login(user);

  }

}
