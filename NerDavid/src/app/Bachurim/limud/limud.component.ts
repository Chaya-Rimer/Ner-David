import { Component } from '@angular/core';
import { LimudService } from './limud.service';
import { IMasechet } from './ILimud';
import { KeyValue } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getGematriaArrayUpToLetter } from './function';
import { AutocompleteComponent } from "../../autocomplete/autocomplete.component";

@Component({
  selector: 'nd-limud',
  templateUrl: './limud.component.html',
  styleUrl: './limud.component.scss',
})
export class LimudComponent {
  masecetOption: KeyValue<number,string>[] = [];
  masechet!: IMasechet[];
  prakimNumE: string|undefined;
  prakimNumArray: { key: number, value: string }[] = [];
  dapimNum: { letter: string, gematria: number }[] = [];
  hebrewLettersPattern = /^[\u0590-\u05FF\s]*$/;
  form: FormGroup;
  title: string = {} as string;
  isFieldValid:boolean=false;
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
  }
  createForm(): FormGroup {
    return this.fb.group({
      masechet: new FormControl(null,Validators.required),
      perek: new FormControl(null),
      startValue: new FormControl(null),
      endValue: new FormControl(null),
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
  onSelectionChange(selected: { key: number, value: string },index:number) {
    let masechet:IMasechet={masechetId:selected.key,masechetName:selected.value}
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
  onValidityChange(isValid: boolean,index:number) {
    this.isFieldValid = isValid; // עדכון מצב התקינות
  }
  get isLIiudFormValid(): boolean {
       return this.isFieldValid??false ;
  }
  getModel() {
    if (this.form.get('formArray')?.valid)
      return this.form.get('formArray')?.value
  }
}