import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NerDavid';
  constructor(private ser: AppService) { }
  ngOnInit() {
    this.ser.getstring().subscribe(x => { alert('massage:' + x) });
  }
}
