import { TestBed } from '@angular/core/testing';

import { UserResloveService } from './user-reslove.service';

describe('UserResloveService', () => {
  let service: UserResloveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserResloveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
