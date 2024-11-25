import { KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BachurimDesktopService {

  constructor(private http:HttpClient) { }
  url='https://localhost:7178/Bachurim/'

  getBachurimNames():Observable<KeyValue<string,string[]>[]>{
   return this.http.get<KeyValue<string,string[]>[]>(this.url+'GetBachurimNames')
 }
}
