import { Component, OnInit } from '@angular/core';
import { ProductoService } from '@producto/shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.sass']
})

export class BorrarProductoComponent implements OnInit {
  productoForm: FormGroup;
  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  eliminar(){
    this.productoServices.eliminar(this.productoForm.value).subscribe(response => {
      console.log(response);
    });
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      id: new FormControl('',
      [Validators.required])
    });
  }
}
