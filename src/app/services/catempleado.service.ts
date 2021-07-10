import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {RUTA} from './api.service';

import { Catempleado } from '../model/catempleados';
import { Empleados } from '../model/empleados';

@Injectable({
  providedIn: 'root'
})
export class CatempleadoService {
  URL_API = RUTA;



  selectedCatEmpleado:Catempleado={
    nombreCategoria:'',
    observacionCategoria:'Ninguna'
  };

  catEmpleados:Catempleado[];

  constructor(
    private http:HttpClient
  ) { 

  }

  getCatEmpleados(){
    const headers = new HttpHeaders({"Content-Type":"application/json" });

   return this.http.get<any>(this.URL_API + 'cat-empleados',{headers:headers});
  }

  createdCatEmpleado(catEmpleados:Catempleado){
    const headers = new HttpHeaders({"Content-Type":"application/json" });
     return this.http.post(this.URL_API +'cat-empleados',catEmpleados);
  }

  deleteCatEmpleado(_id: string | undefined){
    return this.http.delete(this.URL_API+"cat-empleados/"+_id);
  }

  putCatEmpleado(catempleado:Catempleado){
    return this.http.put(this.URL_API + "cat-empleados/"+ catempleado._id,catempleado);
  }

}
