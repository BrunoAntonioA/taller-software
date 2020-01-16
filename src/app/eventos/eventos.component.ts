import { Component, OnInit } from '@angular/core';

import { EventoService } from '../shared/evento/evento.service';
import { Evento } from '../shared/evento/evento.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  providers: [EventoService]
})
export class EventosComponent implements OnInit {

  constructor(private eventoService : EventoService) { }

  ngOnInit() {
    this.refreshEventosList();
  }

  refreshEventosList(){

    let evento = new Evento;
    evento._id = "2323";
    evento.descripcion = "este es un evento de prueba";
    evento.nombre = "Pitch de prueba";
    evento.fecha = new Date();

    let evento2 = new Evento;
    evento._id = "23323";
    evento.descripcion = "Cambia!! es un evento de prueba";
    evento.nombre = "Cualquier de prueba";
    evento.fecha = new Date();

    let evento3 = new Evento;
    evento._id = "23314323";
    evento.descripcion = "Cambi134a!! es un evento de prueba";
    evento.nombre = "Cualqu1341ier de prueba";
    evento.fecha = new Date();

    this.eventoService.eventos = new Array<Evento>();
    this.eventoService.eventos.push(evento);
    this.eventoService.eventos.push(evento2);
    this.eventoService.eventos.push(evento3);

  }

  agregarEvento(){
    this.eventoService.eventos.push(new Evento);
  }

  guardarCambios(){
    console.log(this.eventoService.eventos);
  }
}
