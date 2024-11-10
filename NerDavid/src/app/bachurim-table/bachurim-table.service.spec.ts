import { TestBed } from '@angular/core/testing';

import { BachurimTableService } from './bachurim-table.service';

describe('BachurimTableService', () => {
  let service: BachurimTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BachurimTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
