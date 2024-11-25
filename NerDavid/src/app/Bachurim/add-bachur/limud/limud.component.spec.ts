import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimudComponent } from './limud.component';

describe('LimudComponent', () => {
  let component: LimudComponent;
  let fixture: ComponentFixture<LimudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
