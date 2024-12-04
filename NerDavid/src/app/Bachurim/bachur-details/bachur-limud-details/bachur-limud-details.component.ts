import { Component } from '@angular/core';
import { LimudService } from '../../limud/limud.service';
import { ILimudDetails } from '../../limud/ILimud';

@Component({
  selector: 'nd-bachur-limud-details',
  templateUrl: './bachur-limud-details.component.html',
  styleUrl: './bachur-limud-details.component.scss'
})
export class BachurLimudDetailsComponent {
  dataSource: ILimudDetails[] = []
  constructor(private _limudService:LimudService){}
  ngOnInit(){
    this._limudService.getBachurLimudTable(100).subscribe(x=>{this.dataSource=x})
  }

}
