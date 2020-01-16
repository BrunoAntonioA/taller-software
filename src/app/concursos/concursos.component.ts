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

  private etapa : any;

  constructor(private concursoService: ConcursoService, private proyectoService: ProyectoService){}

  ngOnInit() {

    this.etapa = 0;
    this.concursoService.agregar = false;
    this.concursoService.seleccionado = true;
    this.proyectoService.seleccionado = false;
    this.refreshConcursoList();
    this.refreshProyectoList();

  }

  changeEtapa(n){
    this.etapa = n;
  }


  refreshConcursoList(){
    this.concursoService.concursos = [];
    this.concursoService.getConcursoList().subscribe((res) => {
      this.concursoService.concursos = res as Concurso[];
    });
    this.concursoService.selectedConcurso = new Concurso;
  }
  
  refreshProyectoList(){
    this.proyectoService.proyectos = [];

    this.proyectoService.getProyectoList().subscribe((res) => {
      this.proyectoService.proyectos = res as Proyecto[];
    });
  }

  agregarConcurso(){
    this.concursoService.postConcurso(this.concursoService.selectedConcurso).subscribe((res) => {
      console.log('agregado satisfactoriamente');
      this.refreshConcursoList();
    });
    
  }

  selectProyecto(){
    console.log('entra al método select concurso de concursos component');
    if(this.proyectoService.seleccionado == true){
      this.proyectoService.seleccionado = false;
    }else{
      this.proyectoService.seleccionado = true;
    }
  }

  activarAgregarConcurso(){
    this.concursoService.agregar = true;
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
