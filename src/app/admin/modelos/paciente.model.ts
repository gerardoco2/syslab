export class Paciente {
    cedula: string;
    nombre: string;
    apellido: string;
    fecha_nac: Date;
    email: string;
    telefono: string;

    constructor(cedula: string, nombre: string, apellido: string,
        fecha_nac: Date, email: string, telefono: string) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nac = fecha_nac;
        this.email = email;
        this.telefono = telefono;
    }
}

