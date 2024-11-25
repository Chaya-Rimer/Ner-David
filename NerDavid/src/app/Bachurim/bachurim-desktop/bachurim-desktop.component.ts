import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBachurComponent } from '../add-bachur/add-bachur.component';
import { FormBuilder } from '@angular/forms';
import {map, Observable, startWith} from 'rxjs';
import { BachurimDesktopService } from './bachurim-desktop.service';
import { KeyValue } from '@angular/common';


export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'nd-bachurim-desktop',
  templateUrl: './bachurim-desktop.component.html',
  styleUrl: './bachurim-desktop.component.scss'
})
export class BachurimDesktopComponent {
  readonly dialog = inject(MatDialog);
  private _formBuilder = inject(FormBuilder);

  constructor(private _desktopService: BachurimDesktopService) { }
  stateForm = this._formBuilder.group({
    stateGroup: ' ',
  });
  stateGroups!: KeyValue<string,string[]>[];
  // stateGroups: KeyValue<string,string[]>[] = [
  //   {
  //     key: 'A',
  //     value: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
  //   },
  //   {
  //     key: 'C',
  //     value: ['California', 'Colorado', 'Connecticut'],
  //   },]
  stateGroupOptions!: Observable< KeyValue<string,string[]>[]>;
  ngOnInit() {
    this._desktopService.getBachurimNames().subscribe(x=>{
      console.log(x,"jhgfh"),
      this.stateGroups = x;
      // this._filterGroup('');
      this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
        startWith(''),
        map(value => this._filterGroup(value || '')),
      );
  });


    
  }

  private _filterGroup(value: string):  KeyValue<string,string[]>[] {
    if (value) {
      return this.stateGroups
        .map(group => ({key: group.key, value: _filter(group.value, value)}))
        .filter(group => group.value.length > 0);
    }

    return this.stateGroups;
  }



  openDialog() {
    this.dialog.open(AddBachurComponent, {
      width: '800px',
      height: '550px',
      data: {
        animal: 'panda',
      },

    });
  }
}
