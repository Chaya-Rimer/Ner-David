import { Component, ElementRef, inject, Inject, signal, viewChild, ViewChild, viewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BachurimService } from '../bachurim.service';
import { ICity, INewEditBachur, IPhones, IShiur, IYeshiva } from '../IBachurim';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LimudComponent } from '../limud/limud.component';
import { PhonesComponent } from './phones/phones.component';
import { KeyValue } from '@angular/common';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { open } from 'fs';

@Component({
  selector: 'nd-add-bachur',
  templateUrl: './add-bachur.component.html',
  styleUrl: './add-bachur.component.scss'
})
export class AddBachurComponent {
  newBachurForm!: FormGroup;
  yeshivaOption!: IYeshiva[];
  shiurOption:KeyValue<number,string>[]=[];
  newBachur: INewEditBachur = {} as INewEditBachur;
  filteredOptions!: string[];
  cityArray: KeyValue<number, string>[] = [];
  citySelected!: KeyValue<number, string>;
  yeshivaSelected!: KeyValue<number, string>;
  yeshivaKeyValueArray: KeyValue<number, string>[] = [];
  isOpen: boolean = false;
  phonesNumber: string[] = [];
  @ViewChild(LimudComponent) limudComponent: LimudComponent | undefined;
  @ViewChild(PhonesComponent) phoneComponent: PhonesComponent | undefined
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  accordion = viewChild.required(MatAccordion);

  constructor(public _BachurimSer: BachurimService, public dialogRef: MatDialogRef<AddBachurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: INewEditBachur) { }
  readonly panelOpenState = signal(false);
  private _snackBar = inject(MatSnackBar);
  ngOnInit() {
    this.newBachurForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(''),
      city: new FormControl(),
      adress: new FormControl(''),
      yeshiva: new FormControl(),
      shiur: new FormControl(),
      yeshivaType: new FormControl('')
    });

    this._BachurimSer.getCity().subscribe(x => {
      this.cityArray = x.map(item => ({ key: item.cityId, value: item.cityName }))
    })
    this._BachurimSer.getYeshiva().subscribe(x => {
      this.yeshivaKeyValueArray = x;
      if (this.data) {
        // console.log(this.yeshivaKeyValueArray.filter(x=>x.value==this.data.bachur.yeshiva?.yeshivaName),"filter");

      }
    });

    if (this.data) {
      this.phonesNumber = this.data.phones.map(x => x.phone);
      this.newBachurForm.patchValue(this.data.bachur)
      let yeshiva: KeyValue<number, string> = {
        key: this.data.bachur.yeshiva?.yeshivaId,
        value: this.data.bachur.yeshiva?.yeshivaName
      }
      this.newBachurForm.controls['yeshiva'].setValue(yeshiva)
      this.newBachurForm.controls['city'].setValue(this.data.bachur.city)
      this.newBachurForm.controls['shiur'].setValue(this.data.bachur.shiur)
      this.newBachurForm.controls['yeshivaType'].setValue(this.data.bachur.yeshiva.yeshivaType)

      // this.newBachurForm.patchValue(this.data)
      console.log(this.newBachurForm.value, "form");

    }
  }

  onSelectionChange(selected: KeyValue<number, string>) {
    // this.yeshivaSelected = selected;
      if (selected.key != 0) {
        this._BachurimSer.getShiurByYeshivaId(selected.key).subscribe(x =>
           this.shiurOption = x.map(y=>({key:y.shiurId,value:y.shiurName !== undefined ? y.shiurName : 'default'})))
      }
      else {
        this._BachurimSer.getShiur().subscribe(x => 
          this.shiurOption = x.map(y=>({key:y.shiurId,value:y.shiurName !== undefined ? y.shiurName : 'default'})))
          this.isOpen = true;
      }
  }
  onSelectionCityChange(selected: KeyValue<number, string>) {
    // this.newBachurForm.controls['city'].setValue(selected)
    this.citySelected = selected;
  }
  save() {

    const array = this.limudComponent?.getModel();

    const phoneArray = this.phoneComponent?.getModel();

    const values = Object.values(phoneArray);
    const phonesObject: IPhones[] = values.map(value => ({ phone: value as string }));

    this.newBachur.bachur = this.newBachurForm.value
    let yeshiva: IYeshiva =
    {
      // yeshivaId: this.yeshivaSelected.key,
      yeshivaId: this.newBachurForm.controls['yeshiva'].value.key,
      yeshivaName: this.yeshivaSelected.value,
      yeshivaType: this.newBachurForm.controls['yeshivaType'].value
    }
    console.log(yeshiva, "y");

    this.newBachur.bachur.yeshiva = yeshiva;
    this.newBachur.bachur.city = this.citySelected;
    // this.newBachur.limud = this.limudComponent?.getModel();
    this.newBachur.phones = phonesObject;
    console.log(this.newBachur, "new");
    // this._BachurimSer.newBachur(this.newBachur).subscribe(x => {
    //   this._snackBar.open("הבחור נוסף בהצלחה!", 'אישור', {
    //     duration: 3000
    //   });
    //   this.dialogRef.close();

    // });

  }
}
