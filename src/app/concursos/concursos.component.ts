import { Component, OnInit } from '@angular/core';

import { ConcursoService } from '../shared/concurso/concurso.service';
import { Concurso } from '../shared/concurso/concurso.model';

@Component({
  selector: 'app-concursos',
  templateUrl: './concursos.component.html',
  styleUrls: ['./concursos.component.css'],
  providers: [ConcursoService]
})
export class ConcursosComponent implements OnInit {

  constructor(private concursoService: ConcursoService){}

  ngOnInit() {

    this.concursoService.seleccionado = true;
    this.refreshConcursoList();

  }

  refreshConcursoList(){

    this.concursoService.concursos = [];
    this.concursoService.getConcursoList().subscribe((res) => {

      this.concursoService.concursos = res as Concurso[];
      console.log(res);
    });
    
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
