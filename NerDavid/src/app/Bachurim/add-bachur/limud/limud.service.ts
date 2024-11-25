import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMasechet } from './ILimud';

@Injectable({
  providedIn: 'root'
})
export class LimudService {

  constructor(private http:HttpClient) { }
  url='https://localhost:7178/Limud/'

  getMasecet():Observable<IMasechet[]>{
   return this.http.get<IMasechet[]>(this.url+'GetMasechets')
 }
 
}
