import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './components/compra/compra.component';
import { CrearCompraComponent } from './components/crear-compra/crear-compra.component';

const routes: Routes = [
    {
        path: '',
        component: CompraComponent,
        children : [
            {
                path: 'crear',
                component: CrearCompraComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompraRoutingModule {  }
