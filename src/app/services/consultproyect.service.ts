import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultproyectService {
  URL_API = 'http://165.232.131.165/';
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
}
