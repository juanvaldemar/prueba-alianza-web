import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigodeejecucionmilitarComponent } from './codigodeejecucionmilitar.component';

describe('CodigodeejecucionmilitarComponent', () => {
  let component: CodigodeejecucionmilitarComponent;
  let fixture: ComponentFixture<CodigodeejecucionmilitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigodeejecucionmilitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigodeejecucionmilitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
