export class Item {
    id?: number;
    nombre: string;
    descripcion: string;
    valorInicial: number;
    valorFinal: number;
    unidad_id: number;
    tipoExamen_id: string


    constructor(nombre: string,
        descripcion: string,
        valorIni: number, valorFinal: number, unidad_id: number, te_id: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.valorInicial = valorIni;
        this.valorFinal = valorFinal;
        this.unidad_id = unidad_id;
        this.tipoExamen_id = te_id;
    }
}