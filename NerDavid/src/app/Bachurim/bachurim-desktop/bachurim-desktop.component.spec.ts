import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachurimDesktopComponent } from './bachurim-desktop.component';

describe('BachurimDesktopComponent', () => {
  let component: BachurimDesktopComponent;
  let fixture: ComponentFixture<BachurimDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BachurimDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BachurimDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
