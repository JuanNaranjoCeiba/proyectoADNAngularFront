import { Component, OnInit } from '@angular/core';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.sass']
})

export class ListarProductoComponent implements OnInit {
  public listaProductos: Observable<Producto[]>;

  constructor(protected productoService: ProductoService) { }

  ngOnInit(){
    this.listaProductos = this.productoService.consultar();
  }
}
