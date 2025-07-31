import { TestBed } from '@angular/core/testing';

import { RefurnServiceService } from './refurn-service.service';

describe('RefurnServiceService', () => {
  let service: RefurnServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefurnServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
