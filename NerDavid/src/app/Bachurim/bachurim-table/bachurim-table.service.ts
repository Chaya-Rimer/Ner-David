import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IbachurimTable } from './IBachurimTable';

@Injectable({
  providedIn: 'root'
})
export class BachurimTableService {

  constructor(private http:HttpClient) { }
  url='https://localhost:7178/BachurimTable/'

  getBachurimTable(type:number):Observable<IbachurimTable[]>{
   return this.http.get<IbachurimTable[]>(this.url+`GetBachurimTable?type=${type}`)
 }

}
