import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILimudDetails, IMasechet, IZman } from './ILimud';
import { ICity } from '../IBachurim';

@Injectable({
  providedIn: 'root'
})
export class LimudService {

  constructor(private http:HttpClient) { }
  url='https://localhost:7178/Limud/'

  getMasecet():Observable<IMasechet[]>{
   return this.http.get<IMasechet[]>(this.url+'GetMasechets')
 }
 getBachurLimudTable(bachurId:number):Observable<ILimudDetails[]>{
  return this.http.get<ILimudDetails[]>(this.url+`getBachurLimudTable?bachurId=${bachurId}`)
}
getZman():Observable<IZman[]>{
  return this.http.get<IZman[]>(this.url+'GetZman')
}
 
}
