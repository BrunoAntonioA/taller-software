import { Component, OnInit } from '@angular/core';

import { ConcursoService } from '../shared/concurso/concurso.service';

@Component({
  selector: 'app-concursos',
  templateUrl: './concursos.component.html',
  styleUrls: ['./concursos.component.css']
})
export class ConcursosComponent implements OnInit {

  constructor(private concursoService: ConcursoService){}

  ngOnInit() {

    this.concursoService.seleccionado = false;

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
