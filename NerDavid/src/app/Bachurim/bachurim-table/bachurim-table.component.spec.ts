import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachurimTableComponent } from './bachurim-table.component';

describe('BachurimTableComponent', () => {
  let component: BachurimTableComponent;
  let fixture: ComponentFixture<BachurimTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BachurimTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BachurimTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
