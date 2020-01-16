import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }

  evaluar(){

    if(this.verificarCampos()){
      //post
      alert("is working")

    }

  }

  verificarCampos(){
    let revisando = true;
    for(let field of this.fieldArray){

      //revisando  nombre
      if(!(field.nombre.length>0)){
        revisando = false
        alert("El juez "+ field.nombre + " no es valido o esta incompleto")
      }
      if(!/^[+-]?\d+(\.\d+)?$/.test(field.nota)){
        revisando = false
        alert("La nota "+ field.nota + " no es valida porfavor ingresela en un una escala de 1.0 a 7.0")
      }
      return revisando

    }


    return true
  }

}
