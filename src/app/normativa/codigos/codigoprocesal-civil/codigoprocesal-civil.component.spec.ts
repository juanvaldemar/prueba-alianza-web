import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoprocesalCivilComponent } from './codigoprocesal-civil.component';

describe('CodigoprocesalCivilComponent', () => {
  let component: CodigoprocesalCivilComponent;
  let fixture: ComponentFixture<CodigoprocesalCivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoprocesalCivilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoprocesalCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
