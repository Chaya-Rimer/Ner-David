import { TestBed } from '@angular/core/testing';

import { BachurimService } from './Bachurim/bachurim.service';

describe('BachurimService', () => {
  let service: BachurimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BachurimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
