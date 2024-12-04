import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'nd-phones',
  templateUrl: './phones.component.html',
  styleUrl: './phones.component.scss'
})
export class PhonesComponent {
  @Input()element!:any;

  phoneForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.phoneForm = this.fb.group({
      telNumbers:  this.fb.array([this.fb.control('',[Validators.required,Validators.pattern('^[0-9]{0,10}$')])])
    });
  }
  get telNumbers(): FormArray {
    return this.phoneForm.get('telNumbers') as FormArray;
  }
  get isValid():boolean{
    return this.phoneForm.get('telNumbers')?.valid??false
  }
  addTelField(): void {
    this.telNumbers.push(this.fb.control('',Validators.required));
  }
  removeItem(index: number): void {
    this.telNumbers.removeAt(index);
    
  }
  getModel() {
    if (this.phoneForm.get('telNumbers')?.valid)
      return this.phoneForm.get('telNumbers')?.value
  }
}
