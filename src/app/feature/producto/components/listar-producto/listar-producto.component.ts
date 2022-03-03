import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';
import { Observable, Subscription } from 'rxjs';
import { ModalGlobalService } from '@core/services/globalService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.sass']
})

export class ListarProductoComponent implements OnInit, OnDestroy {
  public listaProductos: Observable<Producto[]>;
  listSubscribers: Subscription[] = [];
  constructor(
    protected productoService: ProductoService, 
    private modalGlobalService: ModalGlobalService) { }

  ngOnInit(){
    this.listaProductos = this.productoService.consultar();
    this.listenObserver();

  }

  obtenerProductos(){
    this.listaProductos = this.productoService.consultar();
  }

  eliminarProducto(producto: Producto){
    Swal.fire({
      title: 'Desea eliminar el producto?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      if(result.isConfirmed){
        this.productoService.eliminar(producto).subscribe(() => {
          this.obtenerProductos();
          Swal.fire(
            'Producto eliminado',
            `${ producto.nombre } fue eliminado correctamente`,
            'success'
          );
        });
      }else if(result.isDenied){
        Swal.fire('Info', 'El producto no se eliminó', 'info');
      }
    });
  }

  listenObserver = () => {
    const observer1$ = this.modalGlobalService.event.subscribe(() => {
//aqui llamas al metodo del get de lo que quieres actualizar
      this.obtenerProductos();
    });

    this.listSubscribers = [observer1$];
  }

  ngOnDestroy(): void {
    this.listSubscribers.map(a => a.unsubscribe());
  }

}
