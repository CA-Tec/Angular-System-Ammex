import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Productos} from '../model/productos';
import {RUTA} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  URL_API = RUTA;
  constructor(private http:HttpClient) { }

  selectedProducto:Productos={
    nombreProducto:'', 
    observacionProducto:''
  }

  producto:Productos[];

  getProducto(){
    return this.http.get<any>(this.URL_API+'productos');
  }

  createProducto(producto:Productos){
    return this.http.post(this.URL_API+'productos',producto);
  }

  putProducto(producto:Productos){
    return this.http.put(this.URL_API+'productos/'+producto._id,producto)
  }

  deleteProducto(_id:String){
    return this.http.delete(this.URL_API+'productos/'+_id);
  }
}
