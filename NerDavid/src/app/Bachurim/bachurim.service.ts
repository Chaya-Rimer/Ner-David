import { HttpClient } from '@angular/common/http';
import { APP_ID, inject, Injectable } from '@angular/core';
import { ICity, INewEditBachur, IPhones, IShiur, IYeshiva } from './IBachurim';
import { map, Observable } from 'rxjs';
import { AddBachurComponent } from './add-bachur/add-bachur.component';
import { MatDialog } from '@angular/material/dialog';
import { KeyValue } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BachurimService {
  readonly dialog = inject(MatDialog);
  // yeshivaKeyValueArray:KeyValue<number,string>[] = [];
  constructor(private http: HttpClient) { }
  url = 'https://localhost:7178/Bachurim/'

  getBachurDetail(bachurId: number): Observable<INewEditBachur> {
    return this.http.get<INewEditBachur>(this.url + `GetBachurDetail?bachurId=${bachurId}`)
  }
  getYeshiva(): Observable<KeyValue<number, string>[]> {
    return this.http.get<IYeshiva[]>(this.url + 'GetYeshiva').pipe(
      map(x => {
        return x.map(item => {
          return { key: item.yeshivaId, value: item.yeshivaName }; // המרת המידע ל-KeyValue
        });
      })
    );

  }
  getShiurByYeshivaId(yeshivaId: number): Observable<IShiur[]> {
    return this.http.get<IShiur[]>(this.url + `GetShiurByYeshivaId?yeshivaId=${yeshivaId}`)
  }
  getShiur(): Observable<IShiur[]> {
    return this.http.get<IShiur[]>(this.url + 'GetShiur')
  }
  getCity(): Observable<ICity[]> {
    return this.http.get<ICity[]>(this.url + 'GetCity')
  }
  getPhones(bachurId: number): Observable<IPhones[]> {
    return this.http.get<IPhones[]>(this.url + `GetPhones?bachurId=${bachurId}`)
  }
  newBachur(newBachur: INewEditBachur) {
    return this.http.post<INewEditBachur>(this.url + "NewBachur", newBachur)
  }
  // getYeshivaKeyValueArray():KeyValue<number,string>[]{
  //    this.getYeshiva().subscribe(x => {
  //       this.yeshivaKeyValueArray = x.map(item => ({
  //         key: item.yeshivaId,
  //         value: item.yeshivaName
  //       }));
  //   })
  //   return this.yeshivaKeyValueArray;
  // }
  openNewBachurDialog(bachurimDetail?: any) {

    this.dialog.open(AddBachurComponent, {
      data: bachurimDetail,
      panelClass: 'new-bachur-dialog'
    });
  }
}
