import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachurDetailsComponent } from './bachur-details.component';

describe('BachurDetailsComponent', () => {
  let component: BachurDetailsComponent;
  let fixture: ComponentFixture<BachurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BachurDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BachurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
