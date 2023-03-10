import { TestBed } from '@angular/core/testing';

import { BasicIntercepterService } from './basic-intercepter.service';

describe('BasicIntercepterService', () => {
  let service: BasicIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
