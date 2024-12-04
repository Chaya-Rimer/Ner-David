import { Component } from '@angular/core';
import { LimudService } from '../../limud/limud.service';
import { ILimudDetails } from '../../limud/ILimud';

@Component({
  selector: 'nd-bachur-limud-details',
  templateUrl: './bachur-limud-details.component.html',
  styleUrl: './bachur-limud-details.component.scss'
})
export class BachurLimudDetailsComponent {
  data: ILimudDetails[] = []
  constructor(private _limudService:LimudService){}
  ngOnInit(){
    this._limudService.getBachurLimudTable(100).subscribe(x=>{this.data=x})
  }

  isSameYeshivaName(element:any):boolean{
    const e = this.data[this.data.findIndex(x=>x===element)-1]
    return e&&e.yearId==element.yearId;
  }

  yeshivaStyle(field: string, element: any) {

    const c =this.data[ this.data.findIndex(x => x.limudId === element.limudId)-1];


    if (c && c.yeshivaId == element.yeshivaId)
      if (field == 'selection' || field == 'yeshivaName')
        return { 'border-top': 'none', 'color': '#e5e7ea' };

      else
        return { 'border-top-width': '5px' };
    return null;
  }
}
