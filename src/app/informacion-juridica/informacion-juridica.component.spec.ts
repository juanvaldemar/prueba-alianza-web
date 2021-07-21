import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionJuridicaComponent } from './informacion-juridica.component';

describe('InformacionJuridicaComponent', () => {
  let component: InformacionJuridicaComponent;
  let fixture: ComponentFixture<InformacionJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
