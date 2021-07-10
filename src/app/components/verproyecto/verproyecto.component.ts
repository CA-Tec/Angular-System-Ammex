import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ProyectosService} from '../../services/proyectos.service';
import {DocumentoService} from '../../services/documento.service';

import Swal from 'sweetalert2';

import {Router} from '@angular/router';

@Component({
  selector: 'app-verproyecto',
  templateUrl: './verproyecto.component.html',
  styleUrls: ['./verproyecto.component.css']
})
export class VerproyectoComponent implements OnInit {

  constructor(
     public rutaActiva:ActivatedRoute,
     public proyectoService:ProyectosService, 
     public documentoService:DocumentoService,
     public router:Router
     ) { }


  public id;
  public proyecto;
  public catDoc;
  public document;
  file:File;
  ngOnInit() {
    this.obtenerID();
    this.getProyecto(this.id);
    this.getCatDocument();
    this.getDocument();
  }

  obtenerID(){
    this.id =this.rutaActiva.snapshot.params.id;

    this.rutaActiva.params.subscribe(
      (params:Params)=>{
        this.id=params.id;
        console.log(this.id);
      }
    )
  }

  getProyecto(id:string){
    this.proyectoService.getproyecto(id).subscribe(
      res=>{
        this.proyecto= res;
      },
      err=>console.log(err)
    )
  }

  getCatDocument(){
    this.proyectoService.getCatDocument().subscribe(
      res=>{
        this.catDoc=res;
      },err => console.log(err)
    )
  }



  onFileChange(e){
    if( e .target.files && e.target.files[0]){
      this.file = <File>e.target.files[0];

    }
  }

  uploadFile(form:NgForm){
    this.documentoService.createDocumento(form.value.catDocumento,this.id,this.file).subscribe(
      res=>{
        console.log(res)
        this.getDocument();
        this.router.navigate(['/verproyectos']);
      },err=>console.log(err)
    )
  }

  //Obtener Documentos

  getDocument(){
    this.proyectoService.getDocumentos(this.id).subscribe(
      res=>{
        console.log(res);
        this.document = res;
      }, err => console.log(err)
    )
  }

  deleteDoc(id:string){

    
    Swal.fire({
      title: '¿Desea eliminar el Documento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#c23616',
      cancelButtonColor: '#353b48',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      console.log(result);
      if (result.value == true) {
        this.documentoService.delDoc(id).subscribe(
          res =>{
            console.log(res);
            this.getDocument();
          }
        )
        Swal.fire(
          'Documento eliminado',
          '',
          'success'
        )
      }
    })



  }

}
