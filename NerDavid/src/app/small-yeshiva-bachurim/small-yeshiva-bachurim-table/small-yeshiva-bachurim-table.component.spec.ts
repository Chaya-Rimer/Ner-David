import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallYeshivaBachurimTableComponent } from './small-yeshiva-bachurim-table.component';

describe('SmallYeshivaBachurimTableComponent', () => {
  let component: SmallYeshivaBachurimTableComponent;
  let fixture: ComponentFixture<SmallYeshivaBachurimTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallYeshivaBachurimTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallYeshivaBachurimTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
