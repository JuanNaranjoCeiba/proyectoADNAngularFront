export class Producto {
    id?: number;
    nombre: string;
    precio: number;
    imagen: string;
    descripcion: string;
    cantidadExistencias: string;
    fechaVencimientoPublicacion?: string;
    categoria: string;
    idUsuarioVendedor?: number;

    constructor(
        id: number,
        nombre: string,
        precio: number,
        imagen: string,
        descripcion: string,
        cantidadExistencias: string,
        fechaVencimientoPublicacion: string,
        categoria: string,
        idUsuarioVendedor: number
        ) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.cantidadExistencias = cantidadExistencias;
        this.fechaVencimientoPublicacion = fechaVencimientoPublicacion;
        this.categoria = categoria;
        this.idUsuarioVendedor = idUsuarioVendedor;
    }
}
