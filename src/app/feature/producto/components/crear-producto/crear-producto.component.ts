import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    this.productoServices.guardar(this.productoForm.value).subscribe(response => {
      console.log(response);
    });
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      nombre: new FormControl('',
      [Validators.required]),
      precio: new FormControl('',
      [Validators.required]),
      imagen: new FormControl('',
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
