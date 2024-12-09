import { ChangeDetectionStrategy, Component, inject, model, signal } from '@angular/core';
import { LimudService } from './limud.service';
import { IMasechet, IYears, IZman } from './ILimud';
import { KeyValue } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getGematriaArrayUpToLetter } from './function';
import { AutocompleteComponent } from "../../autocomplete/autocomplete.component";
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { log } from 'console';
import { BachurimService } from '../bachurim.service';
import { IShiur, IYeshiva } from '../IBachurim';

@Component({
  selector: 'nd-limud',
  templateUrl: './limud.component.html',
  styleUrl: './limud.component.scss',
})
export class LimudComponent {
  masecetOption: KeyValue<number, string>[] = [];
  masechet!: IMasechet[];
  prakimNumE: string | undefined;
  prakimNumArray: { key: number, value: string }[] = [];
  dapimNum: { letter: string, gematria: number }[] = [];
  zman!: IZman[];
  hebrewLettersPattern = /^[\u0590-\u05FF\s]*$/;
  form: FormGroup;
  title: string = {} as string;
  isFieldValid: boolean = false;
  yeshivaArray!:IYeshiva;
  isYeshivaSelected!:boolean;
  yeshivaSelected!:number;
  checked:boolean= false;
  yeshivaKeyValueArray:KeyValue<number,string>[] = [];
  shiurOption:IShiur[]=[];
  constructor(private limudSer: LimudService, private fb: FormBuilder, public _bachurSer:BachurimService) {
    this.form = this.fb.group({
      formArray: this.fb.array([this.createForm()])
    });
  }
  ngOnInit() {
    this.limudSer.getMasecet().subscribe(x => {
      this.masechet = x
      this.masecetOption = this.masechet.map(({ masechetId, masechetName }) => ({ key: masechetId, value: masechetName }))
    })
    this.limudSer.getZman().subscribe(x => this.zman = x)
     this._bachurSer.getYeshiva().subscribe(x=>this.yeshivaKeyValueArray=x);
  }
  cli(){
    console.log(this.checked,"ccc");
    this.checked=!this.checked
  }
  createForm(): FormGroup {
    return this.fb.group({
      masechet: new FormControl(null),
      perek: new FormControl(''),
      startValue: new FormControl(''),
      endValue: new FormControl(''),
      zman: new FormControl(null),
      year: new FormControl('')
    });
  }
  deletForm(index: number) {
    this.formArray.removeAt(index);

  }
  select(value:boolean){
    this.isYeshivaSelected=value
  }
  addForm(): void {
    const formArray = this.form.get('formArray') as FormArray;
    formArray.push(this.createForm());
  }

  get formArray(): FormArray {
    return this.form.get('formArray') as FormArray;
  }
  onYeshivaSelectionChange(selected: KeyValue<number, string>,index:number) {
    this.yeshivaSelected = selected.key;
    if (selected.key != 0)
      this._bachurSer.getShiurByYeshivaId(this.yeshivaSelected).subscribe(x => this.shiurOption = x)
    else
      this._bachurSer.getShiur().subscribe(x => this.shiurOption = x)
  }
  selectZman(value: any, index: number) {
    let selectedZman = this.zman.find(x => x.zmanName == value)
    this.formArray.at(index).get('zman')?.setValue(selectedZman);
    let year: IYears = {
      yearId: 1,
      yearName: "תשפה"
    }
    this.formArray.at(index).get('year')?.setValue(year);

    console.log(this.form.get('formArray')?.value, "va");

  }
  onSelectionChange(selected: { key: number, value: string }, index: number) {
    let masechet: IMasechet = { masechetId: selected.key, masechetName: selected.value }
    this.formArray.at(index).get('masechet')?.setValue(masechet);

    if (selected.key != 0) {
      const p = this.masechet.find(x => x.masechetId == selected.key)
      if (p) {
        this.prakimNumE = p.prakimNum
        this.prakimNumArray = getGematriaArrayUpToLetter(this.prakimNumE)
      }
    }
    else
      this.prakimNumArray = getGematriaArrayUpToLetter("כ")
  }
  onValidityChange(isValid: boolean, index: number) {
    this.isFieldValid = isValid; // עדכון מצב התקינות
  }
  get isLIiudFormValid(): boolean {
    return this.isFieldValid ?? false;
  }
  getModel() {
    console.log(this.form.get('formArray')?.value, "sssss");

    if (this.form.get('formArray')?.valid)
      return this.form.get('formArray')?.value
  }
}

