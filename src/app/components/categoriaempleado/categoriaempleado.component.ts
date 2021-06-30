import { Component, OnInit, TemplateRef } from '@angular/core';
import {CatempleadoService} from '../../services/catempleado.service';
import { ToastrService } from 'ngx-toastr';
//import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import {NgForm} from '@angular/forms';
import { Catempleado } from 'src/app/model/catempleados';

@Component({
  selector: 'app-categoriaempleado',
  templateUrl: './categoriaempleado.component.html',
  styleUrls: ['./categoriaempleado.component.css']
})
export class CategoriaempleadoComponent implements OnInit {
  //modalRef:BsModalRef;
  p: number = 1;
  datos;
  public i:number;
  public msj;
  constructor(public catEmpleadosService:CatempleadoService, public toastr:ToastrService) {
    this.i= 1;
     
   }

  ngOnInit() {
    this.getCatEmpleados();
   
  }

  getCatEmpleados(){
  this.catEmpleadosService.getCatEmpleados().subscribe(
    res=>{
      this.catEmpleadosService.catEmpleados = res;
    },
    err => console.log(err)
  );
  }

  addCatEmpleado(form:NgForm){

    if(form.value._id){
      this.catEmpleadosService.putCatEmpleado(form.value).subscribe(
        res =>{
          this.msj ='Registro Actualizado';
          this.toastr.info(this.msj);
          form.reset();
          this.getCatEmpleados();
        },
        err => console.log(err)
      )
    }else{
      this.catEmpleadosService.createdCatEmpleado(form.value).subscribe(
        res => {
            this.getCatEmpleados();
            this.msj = 'Categoria Agregada';
            this.toastr.success(this.msj);
            form.reset();
      },
      err => console.error(err)
      );
    }

  }

  deleteCatEmpleado(_id:string|undefined){
    if(confirm("¿Seguro de eliminar el registro?")){
      this.catEmpleadosService.deleteCatEmpleado(_id).subscribe(
        res =>{
          this.getCatEmpleados();
          this.msj='Categoria Eliminada';
          this.toastr.error(this.msj);
        },
        err=> console.log(err)
      )
    }
  }

  updateCatEmpleado(catempleado:Catempleado){
     this.catEmpleadosService.selectedCatEmpleado = catempleado;

  }

  cancelar(form:NgForm ){
    form.reset();
    this.getCatEmpleados();
  }



}
