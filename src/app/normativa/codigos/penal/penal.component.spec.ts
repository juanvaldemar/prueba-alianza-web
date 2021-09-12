import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalComponent } from './penal.component';

describe('PenalComponent', () => {
  let component: PenalComponent;
  let fixture: ComponentFixture<PenalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
