import { Component, OnInit } from '@angular/core';
import {CatDocumentosService} from '../../services/cat-documentos.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

import Swal from 'sweetalert2';

import { CatDocumentos } from 'src/app/model/cat-documentos';
@Component({
  selector: 'app-cat-documentos',
  templateUrl: './cat-documentos.component.html',
  styleUrls: ['./cat-documentos.component.css']
})
export class CatDocumentosComponent implements OnInit {

  public msj;
  public datos;
  constructor(public catDocService:CatDocumentosService,public toastr:ToastrService) { }

  ngOnInit() {
    this.getCatDocumento();
  }

  resetForm(form:NgForm){
    form.reset();
    this.getCatDocumento();
  }

  getCatDocumento(){
    this.catDocService.getCatDoc().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    )
  }

  addCatDocumento(form:NgForm){
    if(form.value._id){
      this.catDocService.putCatDoc(form.value).subscribe(
        res=>{
          this.msjUpdate();
          this.getCatDocumento();
          form.reset();
        },
        err => console.log(err)
      )
    }else{
      this.catDocService.createCatDoc(form.value).subscribe(
        res=>{
          this.msjConfirm();
          this.getCatDocumento();
          form.reset();
        },
        err => console.log(err)
      )
    }

  }

  updateCatDocumento(catDoc:CatDocumentos){
    this.catDocService.selectedCatDoc = catDoc;
  }

  deleteCatDocumento(_id:string){

    Swal.fire({
      title: '¿Desea eliminar la Categoria de Documento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#c23616',
      cancelButtonColor: '#353b48',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      console.log(result);
      if (result.value == true) {
        this.catDocService.deleteCatDoc(_id).subscribe(
          res =>{
  
            this.getCatDocumento();
          },
          err =>console.log(err)
        )
        Swal.fire(
          'Categoria Documento eliminada',
          '',
          'success'
        )
      }
    })





  }


  msjConfirm(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Categoria Documento Agregada',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

  msjUpdate(){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Categoria Documento Actualizada',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

}
