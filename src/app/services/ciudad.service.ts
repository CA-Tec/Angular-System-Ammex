import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ciudad} from '../model/ciudad';
import {Division} from '../model/division';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  URL_API = 'http://165.232.131.165/';
  constructor(private http:HttpClient) { }

  selectedDiviion:Division={
    nombreDivision:'',
    observacionDivision:'',
    _id:''
  }

  division:Division[];

  selectedCiudad:Ciudad={
    nombreCiudad:'',
    division:'',
    observacionCiudad:''
  }

  ciudad:Ciudad[];

  getDivision(){
    return this.http.get<any>(this.URL_API+'division');
  }

  getCiudad(){
   return this.http.get<any>(this.URL_API+'ciudad');
  }

  createCiudad(ciudad:Ciudad){
    return this.http.post(this.URL_API+'ciudad',ciudad);
  }

  updateCiudad(ciudad:Ciudad){
    return this.http.put(this.URL_API+'ciudad/'+ciudad._id,ciudad);
  }

  deleteCiudad(_id:string){
    return this.http.delete(this.URL_API+'ciudad/'+_id);
  }
}
