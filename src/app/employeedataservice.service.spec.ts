import { TestBed } from '@angular/core/testing';

import { EmployeedataserviceService } from './employeedataservice.service';

describe('EmployeedataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeedataserviceService = TestBed.get(EmployeedataserviceService);
    expect(service).toBeTruthy();
  });
});
