import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AgregarConcursoComponent } from "./agregar-concurso.component";

describe("AgregarConcursoComponent", () => {
  let component: AgregarConcursoComponent;
  let fixture: ComponentFixture<AgregarConcursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarConcursoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
