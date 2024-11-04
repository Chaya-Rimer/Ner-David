import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
   url='https://localhost:7178/Bachurim/'
  getstring():Observable<any>{
    return this.http.get<any>(this.url+'Hellow')
  }

}
