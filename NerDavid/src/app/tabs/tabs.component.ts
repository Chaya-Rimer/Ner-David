import { Component } from '@angular/core';

@Component({
  selector: 'nd-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  username!:string;
 constructor(){}
 ngOnInit(){
 this.username= localStorage.getItem('userName')!
 }
}
