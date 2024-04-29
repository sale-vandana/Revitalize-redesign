import { TestBed } from '@angular/core/testing';

import { VegiesService } from './vegies.service';

describe('VegiesService', () => {
  let service: VegiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
