import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigodecomercioComponent } from './codigodecomercio.component';

describe('CodigodecomercioComponent', () => {
  let component: CodigodecomercioComponent;
  let fixture: ComponentFixture<CodigodecomercioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigodecomercioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigodecomercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
