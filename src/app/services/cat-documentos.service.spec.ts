import { TestBed } from '@angular/core/testing';

import { CatDocumentosService } from './cat-documentos.service';

describe('CatDocumentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatDocumentosService = TestBed.get(CatDocumentosService);
    expect(service).toBeTruthy();
  });
});
