import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListavencerComponent } from './listavencer.component';

describe('ListavencerComponent', () => {
  let component: ListavencerComponent;
  let fixture: ComponentFixture<ListavencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListavencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListavencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
