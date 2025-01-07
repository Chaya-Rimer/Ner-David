import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NerDavid';
  isLogin!:boolean;
  constructor(public _loginServce:LoginService) { }
  ngOnInit() {
    this.isLogin=this._loginServce.isLoggedIn;
  }
}
