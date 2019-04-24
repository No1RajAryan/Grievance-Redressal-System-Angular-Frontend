import { TestBed } from '@angular/core/testing';

import { RegServiceService } from './reg-service.service';

describe('RegServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegServiceService = TestBed.get(RegServiceService);
    expect(service).toBeTruthy();
  });
});
