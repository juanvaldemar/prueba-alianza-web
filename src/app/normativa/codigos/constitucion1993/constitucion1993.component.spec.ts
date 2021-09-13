import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Constitucion1993Component } from './constitucion1993.component';

describe('Constitucion1993Component', () => {
  let component: Constitucion1993Component;
  let fixture: ComponentFixture<Constitucion1993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Constitucion1993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Constitucion1993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
