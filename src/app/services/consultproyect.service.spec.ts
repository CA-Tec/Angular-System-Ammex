import { TestBed } from '@angular/core/testing';

import { ConsultproyectService } from './consultproyect.service';

describe('ConsultproyectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultproyectService = TestBed.get(ConsultproyectService);
    expect(service).toBeTruthy();
  });
});
