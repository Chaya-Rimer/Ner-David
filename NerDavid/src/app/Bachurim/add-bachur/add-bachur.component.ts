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
  cityArray: KeyValue<number, string>[] = [];
  citySelected!: ICity;
  yeshivaSelected!: KeyValue<number, string>;
  yeshivaKeyValueArray: KeyValue<number, string>[] = [];
  open: boolean = false;
  @ViewChild(LimudComponent) limudComponent: LimudComponent | undefined;
  @ViewChild(PhonesComponent) phoneComponent: PhonesComponent | undefined
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  accordion = viewChild.required(MatAccordion);

  constructor(public _BachurimSer: BachurimService, public dialogRef: MatDialogRef<AddBachurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }) { }
  readonly panelOpenState = signal(false);
  private _snackBar = inject(MatSnackBar);
  ngOnInit() {
    this.newBachurForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(''),
      address: new FormControl(''),
      shiurId: new FormControl(''),
      yeshivaType: new FormControl('')
    });
    this._BachurimSer.getCity().subscribe(x => {
      this.cityArray = x.map(item => ({ key: item.cityId, value: item.cityName })),
        console.log(this.cityArray, "arr");
    })
    this._BachurimSer.getYeshiva().subscribe(x => this.yeshivaKeyValueArray = x);
  }

  onSelectionChange(selected: KeyValue<number, string>) {
    this.yeshivaSelected = selected;
    if (selected.key != 0)
      this._BachurimSer.getShiurByYeshivaId(selected.key).subscribe(x => this.shiurOption = x)
    else {
      this._BachurimSer.getShiur().subscribe(x => this.shiurOption = x)
      this.open = !this.open
    }
  }
  onSelectionCityChange(selected: KeyValue<number, string>) {
    // this.newBachurForm.controls['city'].setValue(selected)
    this.citySelected = { cityId: selected.key, cityName: selected.value }
  }
  save() {
    const array = this.limudComponent?.getModel();

    const phoneArray = this.phoneComponent?.getModel();

    const values = Object.values(phoneArray);
    const phonesObject: IPhones[] = values.map(value => ({ phone: value as string }));

    this.newBachur.bachur = this.newBachurForm.value
    let yeshiva: IYeshiva =
    {
      yeshivaId: this.yeshivaSelected.key,
      yeshivaName: this.yeshivaSelected.value,
      yeshivaType: this.newBachurForm.controls['yeshivaType'].value
    }
    this.newBachur.bachur.yeshiva = yeshiva;
    this.newBachur.bachur.city = this.citySelected;
    // this.newBachur.limud = this.limudComponent?.getModel();
    this.newBachur.phones = phonesObject;
    console.log(this.newBachur, "new");
    this._BachurimSer.newBachur(this.newBachur).subscribe(x => {
      this._snackBar.open("הבחור נוסף בהצלחה!", 'אישור', {
        duration: 3000
      });
      this.dialogRef.close();

    });

  }
}
