import { Component, OnInit } from '@angular/core';

import { ConcursoService } from '../shared/concurso/concurso.service';
import { Concurso } from '../shared/concurso/concurso.model';

import { ProyectoService } from '../shared/proyecto/proyecto.service';
import { Proyecto } from '../shared/proyecto/proyecto.model';

@Component({
  selector: 'app-concursos',
  templateUrl: './concursos.component.html',
  styleUrls: ['./concursos.component.css'],
  providers: [
    ConcursoService,
    ProyectoService
  ]
})
export class ConcursosComponent implements OnInit {

  constructor(private concursoService: ConcursoService, private proyectoService: ProyectoService){}

  ngOnInit() {
    this.concursoService.agregar = false;
    this.concursoService.seleccionado = true;
    this.proyectoService.seleccionado = false;
    this.refreshConcursoList();

  }

  refreshConcursoList(){

    this.concursoService.concursos = [];
    this.concursoService.getConcursoList().subscribe((res) => {

      this.concursoService.concursos = res as Concurso[];
      console.log(res);
    });
    
  }

  agregarConcurso(){
    console.log('entra al método select concurso de concursos component');
    if(this.concursoService.agregar == true){
      this.concursoService.agregar = false;
    }else{
      this.concursoService.agregar = true;
    }
  }

  selectProyecto(){
    console.log('entra al método select concurso de concursos component');
    if(this.proyectoService.seleccionado == true){
      this.proyectoService.seleccionado = false;
    }else{
      this.proyectoService.seleccionado = true;
    }
  }

  selectConcurso(){
    console.log('entra al método select concurso de concursos component');
    if(this.concursoService.seleccionado == true){
      this.concursoService.seleccionado = false;
    }else{
      this.concursoService.seleccionado = true;
    }

  }

}
