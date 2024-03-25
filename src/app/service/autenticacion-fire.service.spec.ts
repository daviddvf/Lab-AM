import { TestBed } from '@angular/core/testing';

import { AutenticacionFireService } from './autenticacion-fire.service';

describe('AutenticacionFireService', () => {
  let service: AutenticacionFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
