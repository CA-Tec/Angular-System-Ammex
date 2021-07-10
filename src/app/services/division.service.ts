import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RUTA} from './api.service';

import {Division} from '../model/division';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  URL_API = RUTA;

  constructor(private http:HttpClient) { }

  selectedDivision:Division={
    nombreDivision:'',
    observacionDivision:''
  };

  division:Division[];

  getDivisiones(){
    return this.http.get<any>(this.URL_API+'division');
  }

  createDivision(division:Division){
    return this.http.post(this.URL_API+'division',division);
  }

  deleteDivision(_id:string){
    return this.http.delete(this.URL_API+'division/'+_id);
  }

  putDivision(division:Division){ 
    return this.http.put(this.URL_API+'division/'+division._id,division);
  }
}
