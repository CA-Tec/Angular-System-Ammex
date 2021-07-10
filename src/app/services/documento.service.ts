import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Documento} from '../model/documento';
import {RUTA} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  URL_API = RUTA;
  documentSelected:Documento ={
    urlDoc:'',
    nombreDoc:'',
    catDocumento:'',
    proyecto:'',
    alias:''
  }

  documento:Documento[];

  constructor(private http:HttpClient) { }

  createDocumento(catDocumento:string,id:string,archivo:File){
   const fd = new FormData();
   fd.append('proyecto',id);
   fd.append('catDocumento',catDocumento);
   fd.append('nombreDoc',archivo);
    return this.http.post(this.URL_API+'documento',fd);
  }

  delDoc(_id){
    return this.http.delete(this.URL_API+'documento/'+_id)
  }
}
