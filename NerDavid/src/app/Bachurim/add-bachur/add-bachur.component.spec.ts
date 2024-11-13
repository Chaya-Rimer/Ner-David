import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBachurComponent } from './add-bachur.component';

describe('AddBachurComponent', () => {
  let component: AddBachurComponent;
  let fixture: ComponentFixture<AddBachurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBachurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBachurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
