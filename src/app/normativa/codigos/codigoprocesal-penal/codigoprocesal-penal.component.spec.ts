import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoprocesalPenalComponent } from './codigoprocesal-penal.component';

describe('CodigoprocesalPenalComponent', () => {
  let component: CodigoprocesalPenalComponent;
  let fixture: ComponentFixture<CodigoprocesalPenalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoprocesalPenalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoprocesalPenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
