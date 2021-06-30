import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import * as moment from 'moment';

import{ToastrService} from 'ngx-toastr';


import {ProyectosService} from '../../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
public dura;
public inicio;
public datos;
public datos2;
public hoy;
public ciudades;
public super;
public msj;
public folioP;
  constructor(public proyectoService:ProyectosService, public toastr:ToastrService) { }

  ngOnInit() {
  
    this.getDivision();
    this.getProducto();
    this.getSupervisor();
    this.getFolioProyect();
  }

  calcular(form:NgForm){
   var inicio;
   var final;
   var dife;
     inicio =moment(this.proyectoService.selectedProyecto.fechaInicio);
     final=moment(this.proyectoService.selectedProyecto.fechaTermino);
     dife=final.diff(inicio,'days') + 1;

     this.proyectoService.selectedProyecto.duracion = dife ;
     
     console.log(dife);
     this.transcurrido();
  }

  limite(form:NgForm){
  
    this.inicio =this.proyectoService.selectedProyecto.fechaInicio;
    console.log(this.inicio);
   
  }

  transcurrido(){
    var fin; var today; var end; var ini;
    var result;
    fin=this.proyectoService.selectedProyecto.fechaTermino;
    this.hoy= new Date();

    today =moment(this.hoy,"YYYY-MM-DD");
    ini =moment(this.inicio);
    end= moment(fin);
    console.log(today, ini, end);

    if(today < ini){
      result = today.diff(ini,'days') - 1;
      console.log(today + ''+ 'Es menor'+ result);
    }

    if(today > ini && today < end){
      result= end.diff(today,'days') + 1;
      console.log('Faltan'+result);
    }

    if(!result){
      console.log('Proyecto Vencecido');
    }

    if(today > end){
      result= end.diff(today,'days') ;
      console.log(result);
    }

    this.proyectoService.selectedProyecto.transcurrido = result;


  }



getDivision(){
  this.proyectoService.getDivision().subscribe(
    res=>{
      this.datos= res;
    }
  )
}

getCiudad(){
  let consult = this.proyectoService.selectedProyecto.division;
  let model={
    filters:JSON.stringify({
      division:consult
    })
  };
  console.log(model);
  this.proyectoService.getCiudadParams(model).subscribe(
    res =>{
      console.log(res);
      this.ciudades = res;
    }
  )
}

getProducto(){
  this.proyectoService.getProducto().subscribe(
    res =>{
      this.datos2 = res;
    }
  )
}

getSupervisor(){
  this.proyectoService.getSupervisor().subscribe(
    res =>{
      this.super = res;
      console.log(res);
    },
    err => console.log(err)
  )
}

//Proyectos

createProyectos(form:NgForm){
  console.log(form.value);
  this.proyectoService.createProyecto(form.value).subscribe(
    res =>{
      this.msj='Proyecto Agregado';
      this.toastr.success(this.msj);
      window.location.reload();

    }
  ) 
}

limpiar(){
 window.location.reload();
}

getFolioProyect(){
  this.proyectoService.getFolio().subscribe(
    res=>{
      this.folioP =res;
      console.log(this.folioP.folio);
      this.proyectoService.selectedProyecto.folio = this.folioP.folio;
    },err=> console.log(err)
  )
  
}

}
