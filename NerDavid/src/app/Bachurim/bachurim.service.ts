import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICity, IPhones, IShiur, IYeshiva } from './IBachurim';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BachurimService {

  constructor(private http:HttpClient) { }
  url='https://localhost:7178/Bachurim/'

  getYeshiva():Observable<IYeshiva[]>{
   return this.http.get<IYeshiva[]>(this.url+'GetYeshiva')
 }
 getShiur(yeshivaId:number):Observable<IShiur[]>{
  return this.http.get<IShiur[]>(this.url+`GetShiurByYeshivaId?yeshivaId=${yeshivaId}`)
}
getCity():Observable<ICity[]>{
  return this.http.get<ICity[]>(this.url+'GetCity')
}
getPhones(bachurId:number):Observable<IPhones[]>{
  return this.http.get<IPhones[]>(this.url+`GetPhones?bachurId=${bachurId}`)
}

}