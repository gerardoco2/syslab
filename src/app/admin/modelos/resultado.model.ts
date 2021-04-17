export class Resultado {
    id?: number;
    examen_id: number;
    item_id: number;
    valor: string;

    constructor(examen_id: number,
        item_id: number, valor: string) {

        this.examen_id = examen_id;
        this.item_id = item_id;
        this.valor = valor;

    }
}