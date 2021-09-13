import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigotributarioComponent } from './codigotributario.component';

describe('CodigotributarioComponent', () => {
  let component: CodigotributarioComponent;
  let fixture: ComponentFixture<CodigotributarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigotributarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigotributarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
