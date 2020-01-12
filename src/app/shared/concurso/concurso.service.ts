import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Concurso } from './concurso.model';

@Injectable({
  providedIn: 'root'
})

export class ConcursoService {

  seleccionado: Boolean;
  concursoForm: Boolean;
  selectedConcurso: Concurso;
  concursos: Concurso[];
  readonly baseURL = 'http://localhost:3000/concurso';

  constructor(private http : HttpClient) { 
  }

  postConcurso(concurso : Concurso){
    return this.http.post(this.baseURL, concurso);
  }

  getConcursoList() {
    return this.http.get(this.baseURL);
  }

  getConcursoId(_id: string){
    return this.http.get(this.baseURL + `/${_id}`);
  }


  putConcurso(concurso : Concurso) {
    return this.http.put(this.baseURL + `/${concurso._id}`, concurso);
  }

  deleteConcurso(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
