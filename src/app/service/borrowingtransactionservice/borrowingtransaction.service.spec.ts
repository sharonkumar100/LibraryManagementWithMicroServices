import { TestBed } from '@angular/core/testing';

import { BorrowingtransactionService } from './borrowingtransaction.service';

describe('BorrowingtransactionService', () => {
  let service: BorrowingtransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowingtransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
