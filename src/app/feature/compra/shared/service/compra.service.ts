import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Producto } from '@compra/shared/model/producto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compra } from '../model/compra';
import { Envio } from '../model/envio';


@Injectable()
export class CompraService {

    constructor(protected http: HttpService){}

    public guardar(compra: Compra): Observable<boolean>{
        return this.http.doPost<Compra, boolean>(`${environment.endpoint}/compras`, compra, this.http.optsName('crear compra'));
    }

    public listarEnvios(): Observable<Envio[]>{
        return this.http.doGet<Envio[]>(`${environment.endpoint}/envios`, this.http.optsName('listar envios'));
    }

    public listarProductos(): Observable<Producto[]>{
        return this.http.doGet<Producto[]>(`${environment.endpoint}/productos`, this.http.optsName('listar productos'));
    }
}
