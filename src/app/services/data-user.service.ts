import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {

  usuario: string ="";
  token: string = "";
  busqueda=[];
  constructor() { }
}
