import { TestBed } from '@angular/core/testing';

import { QueryServiceService } from './query-service.service';

describe('QueryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryServiceService = TestBed.get(QueryServiceService);
    expect(service).toBeTruthy();
  });
});
