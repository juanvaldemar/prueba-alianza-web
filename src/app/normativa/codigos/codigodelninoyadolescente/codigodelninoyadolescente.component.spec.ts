import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigodelninoyadolescenteComponent } from './codigodelninoyadolescente.component';

describe('CodigodelninoyadolescenteComponent', () => {
  let component: CodigodelninoyadolescenteComponent;
  let fixture: ComponentFixture<CodigodelninoyadolescenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigodelninoyadolescenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigodelninoyadolescenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
