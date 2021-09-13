import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigopenalmilitarComponent } from './codigopenalmilitar.component';

describe('CodigopenalmilitarComponent', () => {
  let component: CodigopenalmilitarComponent;
  let fixture: ComponentFixture<CodigopenalmilitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigopenalmilitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigopenalmilitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
