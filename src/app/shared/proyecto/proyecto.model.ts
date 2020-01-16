import { Postulante } from '../postulante/postulante.model';

export class Proyecto {
    _id: string;
    nombre: string;
    concurso_id: string;
    email: string;
    nombreJefe: string;
    nota1: Number;
    nota2: Number;
    unidadAcademica: string;
    etapa: number;
    fecha_inscripcion: Date;
    postulantes: Array<Postulante>;
    archivos: Array<String>;
}
