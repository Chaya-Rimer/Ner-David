import { Component } from '@angular/core';
import { LimudService } from './limud.service';
import { IMasechet } from './ILimud';
import { KeyValue } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getGematriaArrayUpToLetter } from './function';

@Component({
  selector: 'nd-limud',
  templateUrl: './limud.component.html',
  styleUrl: './limud.component.scss'
})
export class LimudComponent {
  masecetOption!: KeyValue<number, string>[];
  masechet!: IMasechet[];
  prakimNumE!: string;
  prakimNumArray: { letter: string, gematria: number }[] = [];
  dapimNum: { letter: string, gematria: number }[] = [];
  hebrewLettersPattern = /^[\u0590-\u05FF\s]*$/;
  form: FormGroup;
  // limudForm!:FormGroup;

  constructor(private limudSer: LimudService, private fb: FormBuilder) {
    this.form = this.fb.group({
      formArray: this.fb.array([this.createForm()])
    });
  }
  ngOnInit() {
    this.limudSer.getMasecet().subscribe(x => {
      this.masechet = x
      this.masecetOption = this.masechet.map(({ masechetId, masechetName }) => ({ key: masechetId, value: masechetName }))
    })
  }
  createForm(): FormGroup {
    return this.fb.group({
      masechet: new FormControl(null, Validators.required),
      perek: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });
  }
  deletForm(index:number){
    this.formArray.removeAt(index);

  }
  addForm(): void {
    const formArray = this.form.get('formArray') as FormArray;
    formArray.push(this.createForm());
  }

  get formArray(): FormArray {
    return this.form.get('formArray') as FormArray;
  }

  getPrakim(event: any) {
    console.log(event.source.value.key, "llll");
    const p = this.masechet.find(x => x.masechetId == event.source.value.key)
    if (p)
      this.prakimNumE = p.prakimNum
    this.prakimNumArray = getGematriaArrayUpToLetter(this.prakimNumE)
  }
  get isFormValid(): boolean {
    return this.form.get('formArray')?.valid ?? false;
  }
  getModel() {
    if (this.form.get('formArray')?.valid)
      return this.form.get('formArray')?.value
  }
}