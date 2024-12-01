import { Component } from '@angular/core';
import { ILimud } from '../../limud/ILimud';
import { LimudService } from '../../limud/limud.service';

@Component({
  selector: 'nd-bachur-limud-details',
  templateUrl: './bachur-limud-details.component.html',
  styleUrl: './bachur-limud-details.component.scss'
})
export class BachurLimudDetailsComponent {
  dataSource: ILimud[] = []
  constructor(private _limudService:LimudService){}
  ngOnInit(){
    this._limudService.getBachurLimudTable(100).subscribe(x=>{this.dataSource=x})
  }

}
