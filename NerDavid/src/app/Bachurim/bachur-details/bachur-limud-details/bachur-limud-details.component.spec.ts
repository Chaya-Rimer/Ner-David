import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachurLimudDetailsComponent } from './bachur-limud-details.component';

describe('BachurLimudDetailsComponent', () => {
  let component: BachurLimudDetailsComponent;
  let fixture: ComponentFixture<BachurLimudDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BachurLimudDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BachurLimudDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
