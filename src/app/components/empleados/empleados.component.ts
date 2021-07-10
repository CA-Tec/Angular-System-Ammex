import { Component, OnInit } from '@angular/core';
import { EmpleadosService} from '../../services/empleados.service';
import {CatempleadoService} from '../../services/catempleado.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import Swal from 'sweetalert2';

import { Empleados } from 'src/app/model/empleados';




@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  public datos;
  public msj;
  constructor(public empleadoServices:EmpleadosService, public catempleadoService:CatempleadoService, public toastr:ToastrService) { }

  ngOnInit(): void {
  this.getCatempleados();
  }

  getCatempleados(){
    this.empleadoServices.getCatEmpleados().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    )
  }

  createEmpleados(form:NgForm){

    if(form.value._id){
      this.empleadoServices.putEmpleado(form.value).subscribe(
        res=>{
          this.msjUpdate();
          form.reset();
        }
      )
    }else{


   this.empleadoServices.addEmpleados(form.value).subscribe(
     res =>{
       console.log(res)
      form.reset();
      this.msjConfirm();

     },
     err => console.log(err)
   )
    }
  }

  msjConfirm(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Empleado Agregado',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

  msjUpdate(){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Empleado Actualizado',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

  limpiar(form:NgForm){
 form.resetForm()
  }

}
