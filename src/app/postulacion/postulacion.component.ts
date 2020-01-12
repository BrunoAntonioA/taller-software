import { Component, OnInit } from '@angular/core';
import { ConcursoService} from '../shared/concurso/concurso.service';
@Component({
  selector: 'app-postulacion',
  templateUrl: './postulacion.component.html',
  styleUrls: ['./postulacion.component.css']
})
export class PostulacionComponent implements OnInit {

  constructor(private concursoService : ConcursoService) {

   }

  ngOnInit() {
    this.concursoService.seleccionado = false;
  }

  selectConcurso(){
    if(this.concursoService.seleccionado == true){
      this.concursoService.seleccionado = false;
    }else{
      this.concursoService.seleccionado = true;
    }

  }
}
