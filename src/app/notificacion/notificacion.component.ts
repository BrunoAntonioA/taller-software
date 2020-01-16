import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notificacion",
  templateUrl: "./notificacion.component.html",
  styleUrls: ["./notificacion.component.css"]
})
export class NotificacionComponent implements OnInit {
  constructor() {}

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  nombreDelProyecto: string;
  correoJefeProyecto: String;
  retroalimentacion: String;
  notificaciones = [];

  onClick() {
    if (
      this.nombreDelProyecto &&
      this.validateEmail(this.correoJefeProyecto) &&
      this.retroalimentacion
    ) {
      this.notificaciones.push({
        nombreDelProyecto: this.nombreDelProyecto,
        correoJefeProyecto: this.correoJefeProyecto,
        retroalimentacion: this.retroalimentacion
      });
      this.nombreDelProyecto = "";
      this.correoJefeProyecto = "";
      this.retroalimentacion = "";
    } else {
      if (
        !this.validateEmail(this.correoJefeProyecto) &&
        this.nombreDelProyecto &&
        this.retroalimentacion
      ) {
        alert("Mail Inválido");
      } else {
        alert("debes rellenar todos los campos!");
      }
    }
  }
  ngOnInit() {}
}
