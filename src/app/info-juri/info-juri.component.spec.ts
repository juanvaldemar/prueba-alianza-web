import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJuriComponent } from './info-juri.component';

describe('InfoJuriComponent', () => {
  let component: InfoJuriComponent;
  let fixture: ComponentFixture<InfoJuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoJuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoJuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
