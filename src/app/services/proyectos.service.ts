import { Injectable } from '@angular/core';
import {Proyectos} from '../model/proyectos';
import {HttpClient} from '@angular/common/http';
import {CatDocumentos} from '../model/cat-documentos';



@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  URL_API = 'http://165.232.131.165/';

  constructor(private http:HttpClient) { }

  selectedProyecto:Proyectos={
    folio:'',
    nombreProyect:'',
    contratista:'Telmex',
    division:'',
    ciudad:'',
    producto:'',
    supervisorTelmex:'',
    supervisor:'',
    fechaInicio:new Date('00/00/0000'),
    fechaTermino:new Date('00/00/0000'),
    duracion: "",
    transcurrido:0,
    documentos:'',
    costoAprox:'',
    obProyect:'',
    pepProyect:'',
    opProyect:'',
    oeiProyect:'',
    oeProyect:'',
    observacionProyect:'Ninguno',
    status:'ACTIVO',
    etapas:'Captura',
    usuario:'',
   
  }

  proyectos:Proyectos[];


  //Llenado de selects

  getSupervisor(){
    return this.http.get<any>(this.URL_API+'supervisores');
  }

  getDivision(){
    return this.http.get<any>(this.URL_API+'division');
  }

  getProducto(){
    return this.http.get<any>(this.URL_API+'productos')
  }



  getCiudadParams(params){
    return this.http.get<any>(this.URL_API+'ciudad',{headers:{}, params:params});
  }

  createProyecto(proyectos:Proyectos){
    return this.http.post(this.URL_API+'proyectos',proyectos);
  }

  getProyectos(){
    return this.http.get(this.URL_API+'proyectos');
  }

  getFolio(){
    return this.http.get(this.URL_API+'folio');
  }

  getproyecto(id:string){
    return this.http.get(this.URL_API+'proyectos/'+id);
  }

  getCatDocument(){
    return this.http.get(this.URL_API+'cat-documento');
  }


  //obtener Documentos por proyecto

  getDocumentos(id:string){
    return this.http.get(this.URL_API+'documento/'+id);
  }
}
