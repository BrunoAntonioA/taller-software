import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Proyecto } from './proyecto.model';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  seleccionado: Boolean;
  proyectoForm: Boolean;
  selectedProyecto: Proyecto;
  proyectos: Proyecto[];
  readonly baseURL = 'http://190.101.185.129:3000/proyecto';
  readonly url = 'http://190.101.185.129:3000/pdf';

  constructor(private http : HttpClient) { 
  }

  postProyecto(proyecto : Proyecto){
    return this.http.post(this.baseURL, proyecto);
  }

  getProyectoList() {
    return this.http.get(this.baseURL);
  }

  getProyectoId(_id: string){
    return this.http.get(this.baseURL + `/${_id}`);
  }

  postFiles(formData:any){
    return this.http.post(this.url, formData, {responseType: 'blob'})
  }

  putProyecto(proyecto : Proyecto) {
    return this.http.put(this.baseURL + `/${proyecto._id}`, proyecto);
  }

  deleteProyecto(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }


}
