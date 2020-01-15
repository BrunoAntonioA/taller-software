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
  private nombre_proyecto:String;
  private director_proyecto:String;

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }

  postular(){
    console.log(this.fieldArray);
    console.log(this.files);


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
