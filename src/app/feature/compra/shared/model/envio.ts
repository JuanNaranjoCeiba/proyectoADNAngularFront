export class Envio{
    id?: number;
    ciudad: string;
    precio: number;

    constructor(
        id: number,
        ciudad: string,
        precio: number,
        ){
            this.id = id;
            this.ciudad = ciudad;
            this.precio = precio;
        }
}
