import { Component, OnInit } from '@angular/core';

import { ConcursoService } from '../shared/concurso/concurso.service';


@Component({
  selector: 'app-admisibilidad',
  templateUrl: './admisibilidad.component.html',
  styleUrls: ['./admisibilidad.component.css']
})
export class AdmisibilidadComponent implements OnInit {

  constructor(private concursoService : ConcursoService) { }

  ngOnInit() {
  }

  
}
