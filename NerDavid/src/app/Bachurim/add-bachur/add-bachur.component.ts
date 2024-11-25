import { Component, ElementRef, Inject, viewChild, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BachurimService } from '../bachurim.service';
import { IPhones, IShiur, IYeshiva } from '../IBachurim';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LimudComponent } from './limud/limud.component';
import { INewEditBachur } from '../IBachurim';
import { PhonesComponent } from './phones/phones.component';
import { KeyValue } from '@angular/common';
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
  options: string[] = [];
  filteredOptions!: string[];
  // phones!:IPhones[];
  @ViewChild(LimudComponent) limudComponent: LimudComponent | undefined;
  @ViewChild(PhonesComponent) phonesComponent: PhonesComponent | undefined;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor(public _BachurimSer: BachurimService, public dialogRef: MatDialogRef<AddBachurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }) { }
  ngOnInit() {
    this.newBachurForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl(''),
      yeshiva: new FormControl('', Validators.required),
      shiur: new FormControl('', Validators.required),
    });
    this._BachurimSer.getYeshiva().subscribe(x => this.yeshivaOption = x)
    this._BachurimSer.getCity().subscribe(x => this.options = x.map(x => x.cityName))
    // this._BachurimSer.getPhones(100).subscribe(x => this.phones = x)
  }
  filter(): void {
    const filterValue = this.input.nativeElement.value.toLocaleLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }
  getShiur(event: any) {
    this._BachurimSer.getShiur(event.source.value).subscribe(x => this.shiurOption = x)
  }
  
  save() {
    const phoneArray = this.phonesComponent?.getModel();
    const values= Object.values(phoneArray);
    const phonesObject: IPhones[] = values.map(value => ({ phone: value as string }));
    
    this.newBachur.bachur = this.newBachurForm.value
    this.newBachur.limud = this.limudComponent?.getModel();
    this.newBachur.phones=phonesObject;
    console.log(this.newBachur,"new");
    

  }
}
