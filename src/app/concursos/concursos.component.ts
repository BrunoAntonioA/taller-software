import { Component, OnInit } from '@angular/core';
import { Concurso } from '../concurso';

@Component({
  selector: 'app-concursos',
  templateUrl: './concursos.component.html',
  styleUrls: ['./concursos.component.css']
})
export class ConcursosComponent implements OnInit {

  constructor(
    public concursos:Array<Concurso> 
  ){ }

  ngOnInit() {
  }

}
