import { Component, OnInit } from '@angular/core';

import { ConcursoService } from '../shared/concurso/concurso.service';
import { Concurso } from '../shared/concurso/concurso.model';

import { ProyectoService } from '../shared/proyecto/proyecto.service';
import { Proyecto } from '../shared/proyecto/proyecto.model';


@Component({
  selector: 'app-admisibilidad',
  templateUrl: './admisibilidad.component.html',
  styleUrls: ['./admisibilidad.component.css']
})
export class AdmisibilidadComponent implements OnInit {

  constructor(private concursoService : ConcursoService, private proyectoService : ProyectoService) { }

  ngOnInit() {
  }

  
}
