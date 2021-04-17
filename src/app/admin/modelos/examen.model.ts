export class Examen {
    id?: string;
    analista_id: number;
    paciente_id: number;
    fecha: Date;

    constructor(id: string, analista_id: number, paciente_id: number, fecha: Date) {
        this.id = id;
        this.analista_id = analista_id;
        this.paciente_id = paciente_id;
        this.fecha = fecha;
    }
}