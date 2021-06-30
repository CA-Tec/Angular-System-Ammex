import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListavencidosComponent } from './listavencidos.component';

describe('ListavencidosComponent', () => {
  let component: ListavencidosComponent;
  let fixture: ComponentFixture<ListavencidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListavencidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListavencidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
