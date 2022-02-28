import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ProductoPage } from '../page/producto/producto.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let producto: ProductoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        producto = new ProductoPage();
    });

    it('Deberia crear producto', () => {
        const NOMBRE_PRODUCTO = 'producto prueba';
        const PRECIO_PRODUCTO = '100000';
        const IMAGEN_PRODUCTO = 'imagen';
        const DESCRIPCION_PRODUCTO = 'Producto de pruebas';
        const CANTIDADEXISTENCIAS_PRODUCTO = '8';
        const CATEGORIA_PRODUCTO = 'prueba';
        const ID_USUARIO_VENDEDOR = '1';


        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonCrearProductos();
        producto.ingresarNombre(NOMBRE_PRODUCTO);
        producto.ingresarPrecio(PRECIO_PRODUCTO);
        producto.ingresarImagen(IMAGEN_PRODUCTO);
        producto.ingresarDescripcion(DESCRIPCION_PRODUCTO);
        producto.ingresarCantidadExistencias(CANTIDADEXISTENCIAS_PRODUCTO);
        producto.ingresarCategoria(CATEGORIA_PRODUCTO);
        producto.ingresarIdUsuario(ID_USUARIO_VENDEDOR);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar productos', () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonListarProductos();

        expect(4).toBe(producto.contarProductos());
    });
});
