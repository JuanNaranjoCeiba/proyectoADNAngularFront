import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Envio } from '@compra/shared/model/envio';
import { CompraService } from '@compra/shared/service/compra.service';
import { Producto } from '@compra/shared/model/producto';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-crear-compra',
    templateUrl: './crear-compra.component.html',
    styleUrls: ['./crear-compra.component.sass']
})

export class CrearCompraComponent implements OnInit{
    compraForm: FormGroup;
    listaProductos: Producto[] = [];
    listaEnvios: Envio[] = [];
    productoCompra: Producto;
    envioCompra: Envio;
    totalCompra = 0;
    validarExistencias: boolean;
    cantidadProductosCompra: number;
    cantidadExistencias: number;


    constructor(private compraService: CompraService, private formBuilder: FormBuilder){}

    ngOnInit(): void {
        this.getEnvios();
        this.getProductos();
        this.construirFormularioCompra();
    }

    private construirFormularioCompra(){
        this.compraForm = this.formBuilder.group({
            id: [null],
            fechaCompra: [null],
            fechaEntrega: [null],
            cantidadProductos:
            ['',  [Validators.required, Validators.min(1)]],
            cantidadExistencias:
            [''],
            totalCompra: ['', [Validators.required]],
            idUsuarioComprador: ['', [Validators.required]],
            idEnvio: ['', [Validators.required]],
            idProductoComprado: ['', [Validators.required]]
        });
    }

    getEnvios(){
        this.compraService.listarEnvios().subscribe(response => this.listaEnvios = response);
    }

    getProductos(){
        this.compraService.listarProductos().subscribe(response => this.listaProductos = response);
    }

    crear(){

        if
        (this.compraForm.invalid){
            Swal.fire('campos requeridos', 'debe de llenar todos los campos', 'error');
            return;
        }
        const compra = {
            cantidadProductos: this.cantidadProductosCompra,
            totalCompra: this.totalCompra,
            idUsuarioComprador: this.compraForm.get('idUsuarioComprador').value,
            idEnvio: this.envioCompra.id,
            idProductoComprado: this.productoCompra.id
        };

        this.compraService.guardar(compra).subscribe(response => {
            if
            (response !== undefined){
                Swal.fire({
                    icon: 'success',
                    title: 'Compra exitosa',
                    text: 'Su compra ha sido creada con exito',
                    showConfirmButton: true
                });
                this.compraForm.reset();
            }
        }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Se ha generado un error. ${error.error.mensaje}`,
                showConfirmButton: true
            });
        });
    }

    calcularTotalCompra(){

        if
        (this.envioCompra !== undefined){
            this.totalCompra = (this.cantidadProductosCompra * this.productoCompra.precio) + this.envioCompra.precio;
            this.compraForm.get('totalCompra').setValue(this.totalCompra);
        }else{
        this.totalCompra = (this.cantidadProductosCompra * this.productoCompra.precio);
        this.compraForm.get('totalCompra').setValue(this.totalCompra);
        }
    }

    obtenerProductoCompra(){
        const id = this.compraForm.get('idProductoComprado').value;
        this.productoCompra = this.listaProductos.find(producto => producto.id.toString() === id);

    }

    obtenerEnvioCompra(){
        const id = this.compraForm.get('idEnvio').value;
        this.envioCompra = this.listaEnvios.find(envio => envio.id.toString() === id);

        this.calcularTotalCompra();
    }

    validarExistenciasDisponibles(event){

        const cantidadValor = this.productoCompra.cantidadExistencias;
        if
        (event > cantidadValor){
            this.validarExistencias = true;
        }else{
            this.validarExistencias = false;
        }
        this.cantidadProductosCompra = event;

        this.calcularTotalCompra();
    }
}
