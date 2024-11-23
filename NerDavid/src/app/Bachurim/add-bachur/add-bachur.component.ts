import { Component, ElementRef, Inject, ViewChild, viewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BachurimService } from '../bachurim.service';
import { ICity, IPhones, IShiur, IYeshiva } from '../IBachurim';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { INewEditBachur } from '../limud/ILimud';
import { LimudComponent } from '../limud/limud.component';

@Component({
  selector: 'nd-add-bachur',
  templateUrl: './add-bachur.component.html',
  styleUrl: './add-bachur.component.scss'
})
export class AddBachurComponent {
  newBachurForm!: FormGroup;
  yeshivaOption!: IYeshiva[];
  shiurOption!: IShiur[];
  bachur:INewEditBachur={} as INewEditBachur;
  options: string[] = [];
  filteredOptions!: string[];
  // phones!:IPhones[];
  @ViewChild(LimudComponent) limudComponent: LimudComponent | undefined;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor(private _BachurimSer: BachurimService, public dialogRef: MatDialogRef<AddBachurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }) { }
  ngOnInit() {
    this.newBachurForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl(''),
      phone: new FormControl('', Validators.required),
      yeshiva: new FormControl('', Validators.required),
      shiur: new FormControl('', Validators.required),
    });
    this._BachurimSer.getYeshiva().subscribe(x => this.yeshivaOption = x)
    this._BachurimSer.getCity().subscribe(x=>this.options=x.map(x=>x.cityName))
    // this._BachurimSer.getPhones(100).subscribe(x => this.phones = x)
  }
  filter(): void {
    const filterValue = this.input.nativeElement.value.toLocaleLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }
  getShiur(event: any) {
    this._BachurimSer.getShiur(event.source.value.yeshivaId).subscribe(x => this.shiurOption = x)
  }
  save() {
    console.log(this.limudComponent?.isFormValid, "llll" );
    const array=this.limudComponent?.getModel();
 
    
    this.bachur.firstName=this.newBachurForm.controls['firstName'].value
  }
}
