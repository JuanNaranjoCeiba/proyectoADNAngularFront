import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';

import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.sass']
})
export class ListarProductoComponent implements OnInit {
  listaProductos: Producto[] = [];

  constructor(protected productoService: ProductoService) { }

  ngOnInit() {
    console.log(this.listaProductos);
    this.productoService.consultar().subscribe(response => {
      console.log(response);
      this.listaProductos = response;
    });
  }
}
