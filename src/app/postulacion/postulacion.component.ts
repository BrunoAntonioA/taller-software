import { Component, OnInit } from '@angular/core';
import { ConcursoService} from '../shared/concurso/concurso.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ProyectoService } from '../shared/proyecto/proyecto.service';
import { Proyecto } from '../shared/proyecto/proyecto.model';
import { PostulanteService } from '../shared/postulante/postulante.service';

@Component({
  selector: 'app-postulacion',
  templateUrl: './postulacion.component.html',
  styleUrls: ['./postulacion.component.css']
})
export class PostulacionComponent implements OnInit {
  
  constructor(private concursoService : ConcursoService, private proyectoService: ProyectoService,private postulanteService : PostulanteService) {

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
  
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  public files: NgxFileDropEntry[] = [];
  public nombreproyecto:String = "";
  public directorproyecto:String = "";
  public email_jefe:String = "";

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  postular(){
    let logrado = 1;
    //verificando largo de nombre del proyecto
    if(!(this.nombreproyecto.length>0)){
      alert("Ingrese nombre para el proyecto");
      logrado = 0;
    }
    //verificando largo director de proyecto
    if(!(this.directorproyecto.length>0)){
      alert("Ingrese director para el proyecto");
      logrado = 0;
    }

    if(!(this.files.length>0)){
      alert("no ha ingresado archivos")
      logrado = 0;
    }
    
    if(!this.validateEmail(this.email_jefe)){
      alert("email no valido");
      logrado = 0;
    }

    for (let field of this.fieldArray){

      if(!(field.nombre.length>0)){
        alert("el nombre de uno de sus postulantes esta vacio ")
        logrado = 0;
      }


      if(!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( field.rut)){
        alert("rut no valido");
        logrado = 0;
      }

      if(!/^\d+$/.test(field.celular) || field.celular.length!=9){
        alert("telefono no valido");
        logrado = 0;
      }
      if(!(field.unidad_academica.length>0)){
        alert("ingrese una unidad academica ")
        logrado = 0;
      }


    }

    if(logrado == 1){
      //hacemos el post
      let proyecto: any= {};
      proyecto.nombre_proyecto = this.nombreproyecto;
      proyecto.nombre_jefe_proyecto = this.directorproyecto;
      proyecto.email_jefe = this.email_jefe;
      proyecto.postulantes = this.fieldArray;
      this.postulanteService.postProyecto(proyecto);
      alert("Logrado")
    }



  }


  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
 
          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
 
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }



}
