import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigodeprocedimientospenalesComponent } from './codigodeprocedimientospenales.component';

describe('CodigodeprocedimientospenalesComponent', () => {
  let component: CodigodeprocedimientospenalesComponent;
  let fixture: ComponentFixture<CodigodeprocedimientospenalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigodeprocedimientospenalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigodeprocedimientospenalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
