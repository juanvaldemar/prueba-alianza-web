import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Constitucion1979Component } from './constitucion1979.component';

describe('Constitucion1979Component', () => {
  let component: Constitucion1979Component;
  let fixture: ComponentFixture<Constitucion1979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Constitucion1979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Constitucion1979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
