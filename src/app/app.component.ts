import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  private login = 0;
  constructor(public router: Router) {}

  iniciarSesion(){
    this.login = 1;
  }

}
