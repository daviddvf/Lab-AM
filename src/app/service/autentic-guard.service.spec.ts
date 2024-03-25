import { TestBed } from '@angular/core/testing';

import { AutenticGuardService } from './autentic-guard.service';

describe('AutenticGuardService', () => {
  let service: AutenticGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
