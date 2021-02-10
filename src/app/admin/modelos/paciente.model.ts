export class Paciente {
    id?: number;
    nombre: string;
    cedula: string;
    apellido: string;
    fecha_nac: Date;
    email: string;
    telefono: string;

    constructor(nombre: string, cedula: string, apellido: string,
        fecha_nac: Date, email: string, telefono: string) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.apellido = apellido;
        this.fecha_nac = fecha_nac;
        this.email = email;
        this.telefono = telefono;
    }
}

