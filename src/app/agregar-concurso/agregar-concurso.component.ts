import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-agregar-concurso",
  templateUrl: "./agregar-concurso.component.html",
  styleUrls: ["./agregar-concurso.component.css"]
})
export class AgregarConcursoComponent implements OnInit {
  constructor() {}
  nombre: string;
  fechaInicio: String;
  fechaTermino: String;
  concursos = [];

  onClick() {
    this.concursos.push({
      nombre: this.nombre,
      fechaInicio: this.fechaInicio
        .split("-")
        .reverse()
        .join("/"),
      fechaTermino: this.fechaTermino
        .split("-")
        .reverse()
        .join("/")
    });

    this.nombre = "";
    this.fechaInicio = "";
    this.fechaTermino = "";
  }
  ngOnInit() {}
}
