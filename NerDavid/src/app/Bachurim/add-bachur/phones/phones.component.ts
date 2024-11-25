import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    console.log(this.element,"elemnt");

    this.phoneForm = this.fb.group({
      phone1: new FormControl('', [Validators.pattern(/^\d{0,10}$/), Validators.required])
    });
  }
  addField() {
    const controlName = 'phone' + (Object.keys(this.phoneForm.controls).length + 1);
    this.phoneForm.addControl(controlName, new FormControl('', [Validators.pattern(/^\d{0,10}$/), Validators.required]));
  }
  deletField(field: KeyValue<string, AbstractControl<any, any>>) {
    this.phoneForm.removeControl(field.key)
  }
  getModel() {
    if (this.phoneForm.valid)
      return this.phoneForm.value
  }
}
