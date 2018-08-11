import { TestBed, inject } from '@angular/core/testing';

import { WtService } from './wt.service';

describe('WtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WtService]
    });
  });

  it('should be created', inject([WtService], (service: WtService) => {
    expect(service).toBeTruthy();
  }));
});
