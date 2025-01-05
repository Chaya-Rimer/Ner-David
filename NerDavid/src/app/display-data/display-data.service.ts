import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDisplayData } from './IDisplayData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayDataService {

  constructor(private http:HttpClient) { }
  url='https://localhost:7178/DisplayData/'

  getColumnsToTable(displayType:number):Observable<IDisplayData[]>{
    debugger;
   return this.http.get<IDisplayData[]>(this.url+`GetColumnsToTable?displayType=${displayType}`)
 }
}
