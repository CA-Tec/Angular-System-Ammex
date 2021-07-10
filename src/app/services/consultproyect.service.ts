import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RUTA} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultproyectService {
  URL_API = RUTA;
  constructor(private http:HttpClient) { }

  getTotales(){
    return this.http.get<any>(this.URL_API+'totales');
  }

  getVencidos(){
    return this.http.get<any>(this.URL_API+'vencidos');
  }

  getVencer(){
    return this.http.get<any>(this.URL_API+'vencer');
  }

  getTerminados(){
    return this.http.get<any>(this.URL_API+'terminados');
  }
}
