import { Component, OnInit } from '@angular/core';
import {ProyectosService} from '../../services/proyectos.service';
import {ExcelService} from '../../services/excel.service';
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
  constructor( public proyectoService: ProyectosService, public excelService:ExcelService) { }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos(){
    this.proyectoService.getProyectos().subscribe(
      res=>{
        this.proyecto = res;
      }
    )
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

}
