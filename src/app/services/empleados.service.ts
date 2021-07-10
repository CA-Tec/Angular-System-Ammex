import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {RUTA} from './api.service';

import {Empleados} from '../model/empleados';
import {Catempleado} from '../model/catempleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  URL_API = RUTA;

  selectedEmpleado:Empleados={
    nombreEmpleado:'',
    apellidosEmpleado:'',
    fNacEmpleado:new Date("0000,00,00"),
    direccionEmpleado:'',
    CURPEmpleado:'',
    NSSEmpleado:'',
    Categoria:'',
    estudiosEmpleado:'',
    fechaIngreso:new Date("0000,00,00")
  };

  selectedCatEmpleado:Catempleado={
    nombreCategoria:'',
    observacionCategoria:''
  };

  catempleado:Catempleado[];
  empleados:Empleados[];

  constructor(
    private http:HttpClient
  ) { 
    this.empleados=[];
  }

  getEmpleados(){

     const header = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.get<any>(this.URL_API + 'empleados',{'headers':header});
  }

  getCatEmpleados(){
    const header = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.get<any>(this.URL_API + 'cat-empleados',{'headers':header});
  }

  addEmpleados(empleados:Empleados){
    const header = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.URL_API+'empleados',empleados);
  }

  deleteEmpleado(_id:string | undefined){
    return this.http.delete(this.URL_API+'empleados/'+_id);
  }

  putEmpleado(empleados:Empleados){
    return this.http.put(this.URL_API+'empleados/'+empleados._id,empleados);
  }

  getEmpleado(_id:string){
    return this.http.get<any>(this.URL_API+'empleados/'+_id);
  }
}
