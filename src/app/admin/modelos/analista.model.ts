export class Analista {

    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    estatus: string;

    constructor(nombre: string, apellido: string,
        email: string, pass: string, estatus: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = pass;
        this.estatus = estatus;

    }
}