import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposicionComponent } from './exposicion.component';

describe('ExposicionComponent', () => {
  let component: ExposicionComponent;
  let fixture: ComponentFixture<ExposicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
