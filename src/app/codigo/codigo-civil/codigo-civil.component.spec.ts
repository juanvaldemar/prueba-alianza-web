import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoCivilComponent } from './codigo-civil.component';

describe('CodigoCivilComponent', () => {
  let component: CodigoCivilComponent;
  let fixture: ComponentFixture<CodigoCivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoCivilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
