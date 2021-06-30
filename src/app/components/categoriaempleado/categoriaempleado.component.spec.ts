import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaempleadoComponent } from './categoriaempleado.component';

describe('CategoriaempleadoComponent', () => {
  let component: CategoriaempleadoComponent;
  let fixture: ComponentFixture<CategoriaempleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaempleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
