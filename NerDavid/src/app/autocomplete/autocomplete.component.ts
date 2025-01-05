import { KeyValue } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { log } from 'console';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'nd-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {
  @Input() options!: KeyValue<number,string>[];
  @Output() selectionChange = new EventEmitter< KeyValue<number,string>>();
  @Output() validityChange = new EventEmitter<boolean>(); // אירוע לשליחת תקינות השדה
  @Input() title: string = {} as string;
  @Input() required:boolean=false;
  myControl = new FormControl();
  filteredOptions: Observable<KeyValue<number,string>[]>;

  constructor() {
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    if(this.required)
      this.myControl.addValidators(Validators.required);
    this.myControl.valueChanges.subscribe(() => {
      this.checkValidity();
    });
  }

  private _filter(value: string):KeyValue<number,string>[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.value.toLowerCase().includes(filterValue));
  }

  onSelectionChange(selectedValue: string) {
    const selectedOption = this.options.find(option => option.value === selectedValue);
    if (selectedOption) {
      this.myControl.setValue(selectedOption.value); // עדכון ה-input עם ה-value שנבחר
      this.selectionChange.emit(selectedOption); // שליחה של האובייקט המלא
    }
    else {
      // אם האופציה לא נמצאה, שלח אובייקט עם key=null
      this.selectionChange.emit({ key:0, value: selectedValue });
    }

  }
  onInputChange() {
    // אם המשתמש מקליד טקסט שאינו באופציות, ניתן לשלוח את הערך עם key=null
    const currentValue = this.myControl.value;
    const isOptionPresent = this.options.some(option => option.value === currentValue);

    if (!isOptionPresent) {
      this.selectionChange.emit({ key: 0, value: currentValue });
    }
  }
  private checkValidity() {
    const isValid = this.myControl.valid; // בדוק אם השדה תקין
    this.validityChange.emit(isValid); // שלח את התוצאה להורה
  }
}
