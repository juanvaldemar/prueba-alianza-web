import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuoleyproadmComponent } from './tuoleyproadm.component';

describe('TuoleyproadmComponent', () => {
  let component: TuoleyproadmComponent;
  let fixture: ComponentFixture<TuoleyproadmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuoleyproadmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuoleyproadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
