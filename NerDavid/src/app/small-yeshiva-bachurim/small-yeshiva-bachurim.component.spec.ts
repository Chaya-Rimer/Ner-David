import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallYeshivaBachurimComponent } from './small-yeshiva-bachurim.component';

describe('SmallYeshivaBachurimComponent', () => {
  let component: SmallYeshivaBachurimComponent;
  let fixture: ComponentFixture<SmallYeshivaBachurimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallYeshivaBachurimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallYeshivaBachurimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
