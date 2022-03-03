import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.sass']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;

  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  crear() {

      if(this.productoForm.valid){
        this.productoServices.guardar(this.productoForm.value).subscribe(() => {
          Swal.fire('Producto creado con exito', 'El producto fue creado con Exito', 'success');
          this.productoForm.reset();
        },(error) => {
          Swal.fire('Error', error.error.mensaje, 'error');
        });
      }else{
        Swal.fire('Error', 'debe de llenar todos los campos', 'error');
      }
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      nombre: new FormControl('',
      [Validators.required]),
      precio: new FormControl('',
      [Validators.required]),
      descripcion: new FormControl('',
      [Validators.required]),
      cantidadExistencias: new FormControl('',
      [Validators.required]),
      categoria: new FormControl('',
      [Validators.required]),
      idUsuarioVendedor: new FormControl('',
      [Validators.required]),
    });
  }
}
