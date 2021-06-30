import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDocumentosComponent } from './cat-documentos.component';

describe('CatDocumentosComponent', () => {
  let component: CatDocumentosComponent;
  let fixture: ComponentFixture<CatDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
