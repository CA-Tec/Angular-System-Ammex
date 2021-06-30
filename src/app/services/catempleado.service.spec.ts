import { TestBed } from '@angular/core/testing';

import { CatempleadoService } from './catempleado.service';

describe('CatempleadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatempleadoService = TestBed.get(CatempleadoService);
    expect(service).toBeTruthy();
  });
});
