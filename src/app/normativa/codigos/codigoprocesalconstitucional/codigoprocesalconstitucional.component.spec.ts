import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoprocesalconstitucionalComponent } from './codigoprocesalconstitucional.component';

describe('CodigoprocesalconstitucionalComponent', () => {
  let component: CodigoprocesalconstitucionalComponent;
  let fixture: ComponentFixture<CodigoprocesalconstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoprocesalconstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoprocesalconstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
