import { Postulante } from '../postulante/postulante.model';

export class Proyecto {
    _id: string;
    nombre: string;
    fecha_inscripcion: Date;
    nombreJefe: string;
    correoJefe: string;
    postulantes: Array<Postulante>;
    archivos: Array<String>;
    nota1: Number;
    nota2: Number;
}
