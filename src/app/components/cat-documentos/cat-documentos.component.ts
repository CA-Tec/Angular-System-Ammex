import { Component, OnInit } from '@angular/core';
import {CatDocumentosService} from '../../services/cat-documentos.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
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
          this.msj='Documento Actualizado';
          this.toastr.info(this.msj);
          this.getCatDocumento();
          form.reset();
        },
        err => console.log(err)
      )
    }else{
      this.catDocService.createCatDoc(form.value).subscribe(
        res=>{
          this.msj='Documento Agregado';
          this.toastr.success(this.msj);
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
    if(confirm('¿Desea eliminar el Documento?')){
      this.catDocService.deleteCatDoc(_id).subscribe(
        res =>{
          this.msj='Documento eliminado';
          this.toastr.error(this.msj);
          this.getCatDocumento();
        },
        err =>console.log(err)
      )
    }

  }

}
