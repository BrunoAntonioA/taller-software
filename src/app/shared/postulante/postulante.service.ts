import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Postulante } from './postulante.model';

@Injectable({
  providedIn: 'root'
})

export class PostulanteService {

  agregar: Boolean;
  seleccionado: Boolean;
  postulacionForm: Boolean;
  selectedPostulante: Postulante;
  postulantes: Postulante[];
  proyecto: any;

  readonly baseURL = 'http://localhost:3000/postulante';
  
  constructor(private http : HttpClient) { 
  }

  postPostulante(postulante : Postulante){
    return this.http.post(this.baseURL, postulante);
  }

  getPostulanteList() {
    return this.http.get(this.baseURL);
  }

  getPostulanteId(_id: string){
    return this.http.get(this.baseURL + `/${_id}`);
  }


  putPostulante(postulante : Postulante) {
    return this.http.put(this.baseURL + `/${postulante._id}`, postulante);
  }

  deletePostulante(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  


}
