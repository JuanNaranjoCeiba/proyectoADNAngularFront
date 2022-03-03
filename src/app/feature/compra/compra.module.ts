import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CompraComponent } from './components/compra/compra.component';
import { CrearCompraComponent } from './components/crear-compra/crear-compra.component';
import { CompraRoutingModule } from './compra-routing.module';
import { CompraService } from './shared/service/compra.service';

@NgModule({
    declarations: [
        CrearCompraComponent,
        CompraComponent
    ],
    imports: [
        CompraRoutingModule,
        SharedModule,
    ],
    providers: [CompraService]
})

export class CompraModule {}
