import { Component, OnInit, TemplateRef } from '@angular/core';
import {CatempleadoService} from '../../services/catempleado.service';
import { ToastrService } from 'ngx-toastr';
//import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import Swal from 'sweetalert2';

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
          this.msjUpdate();
          form.reset();
          this.getCatEmpleados();
        },
        err => console.log(err)
      )
    }else{
      this.catEmpleadosService.createdCatEmpleado(form.value).subscribe(
        res => {
          this.msjConfirm();

            form.reset();
            this.getCatEmpleados();
      },
      err => console.error(err)
      );
    }

  }

  deleteCatEmpleado(_id:string|undefined){

    Swal.fire({
      title: '¿Desea eliminar la Categoria de Empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#c23616',
      cancelButtonColor: '#353b48',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      console.log(result);
      if (result.value == true) {
        this.catEmpleadosService.deleteCatEmpleado(_id).subscribe(
          res =>{
            this.getCatEmpleados();
          },
          err=> console.log(err)
        )
        Swal.fire(
          'Categoria Empleado eliminada',
          '',
          'success'
        )
      }
    })

  }

  updateCatEmpleado(catempleado:Catempleado){
     this.catEmpleadosService.selectedCatEmpleado = catempleado;

  }

  cancelar(form:NgForm ){
    form.reset();
    this.getCatEmpleados();
  }


  msjConfirm(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Categoria Empleado Agregada',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

  msjUpdate(){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Categoria Empleado Actualizada',
      showConfirmButton: false,
      timer: 2000
    })
    
  }


}
