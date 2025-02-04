import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDesktopComponent } from './test-desktop.component';

describe('TestDesktopComponent', () => {
  let component: TestDesktopComponent;
  let fixture: ComponentFixture<TestDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
