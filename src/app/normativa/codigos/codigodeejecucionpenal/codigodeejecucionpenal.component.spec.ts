import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigodeejecucionpenalComponent } from './codigodeejecucionpenal.component';

describe('CodigodeejecucionpenalComponent', () => {
  let component: CodigodeejecucionpenalComponent;
  let fixture: ComponentFixture<CodigodeejecucionpenalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigodeejecucionpenalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigodeejecucionpenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
