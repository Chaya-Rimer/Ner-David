import { Component, ElementRef, Inject, signal, viewChild, ViewChild, viewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BachurimService } from '../bachurim.service';
import { ICity, INewEditBachur, IPhones, IShiur, IYeshiva } from '../IBachurim';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LimudComponent } from '../limud/limud.component';
import { PhonesComponent } from './phones/phones.component';
import { KeyValue } from '@angular/common';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'nd-add-bachur',
  templateUrl: './add-bachur.component.html',
  styleUrl: './add-bachur.component.scss'
})
export class AddBachurComponent {
  newBachurForm!: FormGroup;
  yeshivaOption!: IYeshiva[];
  shiurOption!: IShiur[];
  newBachur: INewEditBachur = {} as INewEditBachur;
  filteredOptions!: string[];
  title: string = {} as string;
  titleCity: string = {} as string;
  yeshivaKeyValueArray: KeyValue<number,string>[] = [];
  cityArray: KeyValue<number,string>[]=[];
  citySelected!:ICity;
  yeshivaSelected!:  KeyValue<number,string>;
  @ViewChild(LimudComponent) limudComponent: LimudComponent | undefined;
  @ViewChild(PhonesComponent) phoneComponent: PhonesComponent | undefined
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  accordion = viewChild.required(MatAccordion);

  constructor(private _BachurimSer: BachurimService, public dialogRef: MatDialogRef<AddBachurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }) { }
    readonly panelOpenState = signal(false);

  ngOnInit() {
    this.newBachurForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl('', Validators.required),
      // city: new FormControl('', Validators.required),
      address: new FormControl(''),
      // phone: new FormControl('', Validators.required),
      // yeshiva: new FormControl('', Validators.required),
      shiurID: new FormControl('', Validators.required),
    });
    this._BachurimSer.getYeshiva().subscribe(x => {
      this.yeshivaOption = x,
        this.yeshivaKeyValueArray = this.yeshivaOption.map(item => ({
          key: item.yeshivaId,
          value: item.yeshivaName
        }));
      this.title = "ישיבה";
    })
    this._BachurimSer.getCity().subscribe(x => {
      this.cityArray = x.map(item => ({ key: item.cityId, value: item.cityName })),
      console.log(this.cityArray,"arr");
      
      this.titleCity = "עיר"
    })

  }

  onSelectionChange(selected: KeyValue<number, string>) {
    this.yeshivaSelected = selected;
    if (selected.key != 0)
      this._BachurimSer.getShiurByYeshivaId(selected.key).subscribe(x => this.shiurOption = x)
    else
      this._BachurimSer.getShiur().subscribe(x => this.shiurOption = x)
  }
  onSelectionCityChange(selected: KeyValue<number, string>) {
    // this.newBachurForm.controls['city'].setValue(selected)
    this.citySelected={ cityId:selected.key, cityName: selected.value}
  }
  save() {
    const array = this.limudComponent?.getModel();

    const phoneArray = this.phoneComponent?.getModel();
    console.log(phoneArray, "pharray");

    const values = Object.values(phoneArray);
    const phonesObject: IPhones[] = values.map(value => ({ phone: value as string }));

    this.newBachur.bachur = this.newBachurForm.value
    this.newBachur.bachur.yeshivaId = this.yeshivaSelected.key;
    this.newBachur.bachur.city=this.citySelected;
    this.newBachur.limud = this.limudComponent?.getModel();
    this.newBachur.phones = phonesObject;
    console.log(this.newBachur, "new");
    this._BachurimSer.newBachur(this.newBachur).subscribe();

  }
}
