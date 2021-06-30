import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerproyectoComponent } from './verproyecto.component';

describe('VerproyectoComponent', () => {
  let component: VerproyectoComponent;
  let fixture: ComponentFixture<VerproyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerproyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
