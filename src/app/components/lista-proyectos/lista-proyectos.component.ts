import { Component, OnInit } from '@angular/core';
import {ProyectosService} from '../../services/proyectos.service';
import {ExcelService} from '../../services/excel.service';

import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';


import Swal from 'sweetalert2';

import {Proyectos} from '../../model/proyectos';
import { element } from '@angular/core/src/render3';
declare let pdfMake:any;




@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {
public proyecto;
public proyecto1;
public excelNuevo=[];
public search:string='';
public page: number = 0;
public resultPosts;
public  proyectArray =[];
public proyect =[];
public excelSearch=[];

  constructor(public router:Router, 
    public proyectoService: ProyectosService, 
    public excelService:ExcelService

    ) { }

  ngOnInit() {
    this.getProyectos();

  }

  
  getProyectos(){
    this.proyectoService.getProyectos().subscribe(
      res=>{
        this.proyecto = res;
      }
    )
    console.log("Arreglo" + this.resultPosts);
  }

  deleteProyect(_id:string | undefined ){

    Swal.fire({
      title: '¿Desea eliminar el Proyecto?',
      text:'EL FOLIO DEL PROYECTO QUEDARA DISPONIBLE Y LOS DOCUMENTOS ASOCIADOS SERAN ELIMINADOS',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      console.log(result);
      if (result.value == true) {
        this.proyectoService.deleteProyect(_id).subscribe(
          res =>{
            this.getProyectos();
          }
        )
        Swal.fire(
          'Proyecto eliminado',
          '',
          'success'
        )
      }
    })
  }


  updateProyect(proyectos:Proyectos){
    this.proyectoService.selectedProyecto = proyectos;
   /* this.proyectoService.selectedProyecto.supervisorTelmex = proyectos.supervisorTelmex;
    this.proyectoService.selectedProyecto.supervisor = proyectos.supervisor;
    this.proyectoService.selectedProyecto.division = proyectos.division;
    this.proyectoService.selectedProyecto.ciudad = proyectos.ciudad;
    this.proyectoService.selectedProyecto.producto = proyectos.nombreProyect;
    this.proyectoService.selectedProyecto.nombreProyect = proyectos.nombreProyect;*/
    this.router.navigate(['/proyectos']);
  }

  generarExcel(){ 
    var data=[];
    this.proyectoService.getProyectos().subscribe(
      (res:any)=>{
        data = res;
        data.forEach(element=>{
          let model = [
            element.folio,
            element.nombreProyect,
            element.supervisor,
            element.fechaInicio,
            element.fechaTermino,
            element.duracion,
            element.transcurrido,
            element.producto,
            element.documentos,
            element.status,
            element.etapas
          ]

          

          this.excelNuevo.push(model);
        });
        
        console.log(this.excelNuevo);
        this.excelService.generarExcel(this.excelNuevo);
      })
  }

  generatePdf(){
    const documentDefinition ={
      content:['Esta es una prueba'],
      defaultStyle:{
        fontSize:15,
        bold:true,
        alignment:'center',
        color:'white',
        background:'blue'
      }
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  geneExcelSearch(){
  this.proyectArray.forEach(element=>{
      let model = [
        element.folio,
        element.nombreProyect,
        element.supervisor,
        element.fechaInicio,
        element.fechaTermino,
        element.duracion,
        element.transcurrido,
        element.producto,
        element.documentos,
        element.status,
        element.etapas
      ]

      this.excelSearch.push(model);
    });
    if(this.excelSearch.length > 0){
      this.excelService.generarExcelSearch(Object.values(this.excelSearch));
      this.excelSearch = [];
    }else{
      this.msjBusqueda();
    } 
 
}


  nextPage(){
    this.page += 10;
  }

  prevPage(){
    if (this.page > 0)
    this.page -= 10;
  }

  onsearch(search:string){

    console.log(search);
    this.page=0;
    this.search = search;
    console.log("Arreglo" + this.resultPosts);
  }

  onChange(proy:string,isChecked:boolean){
 
  console.log(proy);
    if(isChecked){
      this.proyectArray.push(proy);
      console.log(this.proyectArray);
    }else{
      //let index = this.proyectArray.findIndex(x => x.value == proy);
      //this.proyectArray.splice(index);
      for(let j=0;j< this.proyectArray.length;j++){
        if(this.proyectArray[j] == proy){
          this.proyectArray.splice(j,1);
          break;
        }
      }
      console.log(this.proyectArray);
    }

    for(let i=0; i<this.proyectArray.length;i++){
      console.log(this.proyectArray[i]);
    }
  }


  
  msjBusqueda(){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Debe seleccionar un proyecto',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

}
