import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProyectoComponent } from './tabla-proyecto.component';

describe('TablaProyectoComponent', () => {
  let component: TablaProyectoComponent;
  let fixture: ComponentFixture<TablaProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
