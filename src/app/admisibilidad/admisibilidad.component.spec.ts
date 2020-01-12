import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisibilidadComponent } from './admisibilidad.component';

describe('AdmisibilidadComponent', () => {
  let component: AdmisibilidadComponent;
  let fixture: ComponentFixture<AdmisibilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmisibilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
