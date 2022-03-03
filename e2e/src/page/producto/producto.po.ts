import { by, element } from 'protractor';

export class ProductoPage {
    private linkCrearProducto = element(by.id('linkCrearProducto'));
    private linkEliminarProducto = element(by.id('linkEliminarProducto'));
    private linkListarProductos = element(by.id('linkListarProducto'));
    private inputNombreProducto = element(by.id('nombreProducto'));
    private inputPrecioProducto = element(by.id('precioProducto'));
    private inputImagen = element(by.id('imagenProducto'));
    private inputDescripcionProducto = element(by.id('descripcionProducto'));
    private inputCantidadExistenciasProducto = element(by.id('cantidadExistenciasProducto'));
    private inputCategoriaProducto = element(by.id('categoriaProducto'));
    private inputIdUsuarioVendedor = element(by.id('idUsuarioVendedorProducto'));
    private listaProductos = element.all(by.css('tr.productos td'));

    private botonCrearProducto = element(by.id('crearProducto'));

    async clickBotonLinkCrearProductos() {
        await this.linkCrearProducto.click();
    }

    async clickBotonCrearProductos(){
        await this.botonCrearProducto.click();
    }

    async clickBotonListarProductos() {
        await this.linkListarProductos.click();
    }

    async clickBotonEliminarProductos() {
        await this.linkEliminarProducto.click();
    }

    async ingresarNombre(nombreProducto) {
        await this.inputNombreProducto.sendKeys(nombreProducto);
    }

    async ingresarPrecio(precioProducto){
        await this.inputPrecioProducto.sendKeys(precioProducto);
    }

    async ingresarImagen(imagenProducto){
        await this.inputImagen.sendKeys(imagenProducto);
    }

    async ingresarDescripcion(descripcionProducto) {
        await this.inputDescripcionProducto.sendKeys(descripcionProducto);
    }

    async ingresarCantidadExistencias(cantidadExistenciasProducto) {
        await this.inputCantidadExistenciasProducto.sendKeys(cantidadExistenciasProducto);
    }

    async ingresarCategoria(categoriaProducto) {
        await this.inputCategoriaProducto.sendKeys(categoriaProducto);
    }

    async ingresarIdUsuario(inputIdUsuarioVendedor){
        await this.inputIdUsuarioVendedor.sendKeys(inputIdUsuarioVendedor);
    }

    async contarProductos() {
        return this.listaProductos.count();
    }
}
