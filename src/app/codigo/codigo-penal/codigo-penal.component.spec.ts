import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoPenalComponent } from './codigo-penal.component';

describe('CodigoPenalComponent', () => {
  let component: CodigoPenalComponent;
  let fixture: ComponentFixture<CodigoPenalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoPenalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoPenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
