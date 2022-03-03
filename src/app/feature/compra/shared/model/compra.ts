export class Compra {
    id?: number;
    fechaCompra?: string;
    fechaEntrega?: string;
    cantidadProductos: number;
    totalCompra: number;
    idUsuarioComprador: number;
    idEnvio: number;
    idProductoComprado: number;

    constructor(
        id: number,
        fechaCompra: string,
        fechaEntrega: string,
        cantidadProductos: number,
        totalCompra: number,
        idUsuarioComprador: number,
        idEnvio: number,
        idProductoComprado: number
        ){
        this.id = id;
        this.fechaCompra = fechaCompra;
        this.fechaEntrega = fechaEntrega;
        this.cantidadProductos = cantidadProductos;
        this.totalCompra = totalCompra;
        this.idUsuarioComprador = idUsuarioComprador;
        this.idEnvio = idEnvio;
        this.idProductoComprado = idProductoComprado;
        }
}
