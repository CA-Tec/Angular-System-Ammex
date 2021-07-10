import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuarios} from '../model/usuarios';
import {RUTA} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  URL_API = RUTA;
  constructor(private http:HttpClient) { }

  selectedUsuario:Usuarios={
    nombreUsuario:'',
    email:'',
    password:'',
    tipoCuenta:'',
  }

  usuarios:Usuarios[];

  getUsuario(){
    return this.http.get<any>(this.URL_API+'usuarios');
  }

  createUsuario(usuarios:Usuarios){
    return this.http.post(this.URL_API+'usuarios',usuarios);
  }

  putUsuario(usuarios:Usuarios){
    return this.http.put(this.URL_API+'usuarios/'+usuarios._id,usuarios);
  }

  deleteUsuario(_id:string){
    return this.http.delete(this.URL_API+'usuarios/'+_id);
  }

  getRoles(){
    return this.http.get<any>(this.URL_API+'roles');
  }
}
