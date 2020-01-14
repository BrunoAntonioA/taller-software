import { Component, OnInit } from '@angular/core';

import { Concurso } from '../shared/concurso/concurso.model';
import { ConcursoService } from '../shared/concurso/concurso.service';

@Component({
  selector: 'app-tabla-proyecto',
  templateUrl: './tabla-proyecto.component.html',
  styleUrls: ['./tabla-proyecto.component.css']
})
export class TablaProyectoComponent implements OnInit {

  constructor(private concursoService: ConcursoService) { }

  ngOnInit() {
    this.concursoService.seleccionado = false;
  }

  refreshConcursoList(){

    this.concursoService.concursos = [];

    this.concursoService.getConcursoList().subscribe((res) => {

      this.concursoService.concursos = res as Concurso[];

    });
  }

}
