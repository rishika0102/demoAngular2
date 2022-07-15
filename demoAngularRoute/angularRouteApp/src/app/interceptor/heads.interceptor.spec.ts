import { TestBed } from '@angular/core/testing';

import { HeadsInterceptor } from './heads.interceptor';

describe('HeadsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeadsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeadsInterceptor = TestBed.inject(HeadsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
