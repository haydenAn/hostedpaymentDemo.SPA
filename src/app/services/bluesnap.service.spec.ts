import { TestBed } from '@angular/core/testing';

import { BluesnapService } from './bluesnap.service';

describe('BluesnapService', () => {
  let service: BluesnapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BluesnapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
