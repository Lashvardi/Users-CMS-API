import { TestBed } from '@angular/core/testing';

import { GetUserInfoService } from './get-user-info.service';

describe('GetUserInfoService', () => {
  let service: GetUserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
