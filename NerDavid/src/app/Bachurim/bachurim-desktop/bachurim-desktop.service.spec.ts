import { TestBed } from '@angular/core/testing';

import { BachurimDesktopService } from './bachurim-desktop.service';

describe('BachurimDesktopService', () => {
  let service: BachurimDesktopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BachurimDesktopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
