export class Item {
    id?: number;
    nombre: string;
    descripcion: string;
    valorInicial: number;
    valorFinal: number;
    unidad_id: number;


    constructor(nombre: string,
        descripcion: string,
        valorIni: number, valorFinal: number, unidad_id) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.valorInicial = valorIni;
        this.valorFinal = valorFinal;
        this.unidad_id = unidad_id;
    }
}