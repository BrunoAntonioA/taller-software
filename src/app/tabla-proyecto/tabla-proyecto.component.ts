import { Component, OnInit } from '@angular/core';

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

}
