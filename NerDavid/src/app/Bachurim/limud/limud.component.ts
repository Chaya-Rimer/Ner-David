import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LimudService } from './limud.service';
import { IMasechet, IYears, IZman } from './ILimud';
import { KeyValue } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getGematriaArrayUpToLetter } from './function';
import { AutocompleteComponent } from "../../autocomplete/autocomplete.component";
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { log } from 'console';

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
  zman!:IZman[];
  hebrewLettersPattern = /^[\u0590-\u05FF\s]*$/;
  form: FormGroup;
  title: string = {} as string;
  isFieldValid: boolean = false;
  constructor(private limudSer: LimudService, private fb: FormBuilder) {
    this.form = this.fb.group({
      formArray: this.fb.array([this.createForm()])
    });
  }
  ngOnInit() {
    this.limudSer.getMasecet().subscribe(x => {
      this.masechet = x
      this.masecetOption = this.masechet.map(({ masechetId, masechetName }) => ({ key: masechetId, value: masechetName }))
      this.title = "מסכת";
    })
    this.limudSer.getZman().subscribe(x=>this.zman=x)
  }
  createForm(): FormGroup {
    return this.fb.group({
      masechet: new FormControl(null, Validators.required),
      perek: new FormControl(''),
      startValue: new FormControl(''),
      endValue: new FormControl(''),
      zman:new FormControl(null,Validators.required),
      year:new FormControl('')
    });
  }
  deletForm(index: number) {
    this.formArray.removeAt(index);

  }
  addForm(): void {
    const formArray = this.form.get('formArray') as FormArray;
    formArray.push(this.createForm());
  }

  get formArray(): FormArray {
    return this.form.get('formArray') as FormArray;
  }
  selectZman(value:any,index: number){
     let selectedZman= this.zman.find(x=>x.zmanName==value)
     this.formArray.at(index).get('zman')?.setValue(selectedZman);
     let year:IYears={
      yearId:1,
      yearName:"תשפה"
     }
     this.formArray.at(index).get('year')?.setValue(year);

     console.log( this.form.get('formArray')?.value,"va");
     
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
    console.log(this.form.get('formArray')?.value,"sssss");
    
    if (this.form.get('formArray')?.valid)
      return this.form.get('formArray')?.value
  }
}

