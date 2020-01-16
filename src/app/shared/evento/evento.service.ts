import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Evento } from './evento.model';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  agregar: Boolean;
  seleccionado: Boolean;
  eventoForm: Boolean;
  selectedEvento: Evento;
  eventos: Array<Evento>;
  readonly baseURL = 'http://localhost:3000/evento';

  constructor(private http : HttpClient) { 
  }

  postEvento(evento : Evento){
    return this.http.post(this.baseURL, evento);
  }

  getEventoList() {
    return this.http.get(this.baseURL);
  }

  getEventoId(_id: string){
    return this.http.get(this.baseURL + `/${_id}`);
  }


  putEvento(evento : Evento) {
    return this.http.put(this.baseURL + `/${evento._id}`, evento);
  }

  deleteEvento(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
