import { Component, OnInit } from '@angular/core';
import { EmpleadosService} from '../../services/empleados.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import * as moment from 'moment';

import Swal from 'sweetalert2';

import {NgForm} from '@angular/forms';
import { Empleados } from 'src/app/model/empleados';

@Component({
  selector: 'app-listaempleados',
  templateUrl: './listaempleados.component.html',
  styleUrls: ['./listaempleados.component.css']
})
export class ListaempleadosComponent implements OnInit {

  public msj;
  public empleado;
  constructor(public router:Router ,public empleadoServices:EmpleadosService, public toastr:ToastrService) { }

  ngOnInit() {
    this.getEmpleados();
  }

  
  getEmpleados(){
    this.empleadoServices.getEmpleados().subscribe(
      res => {
        this.empleadoServices.empleados = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  deleteEmpleado(_id:string | undefined ){

    Swal.fire({
      title: '¿Desea eliminar el Empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      console.log(result);
      if (result.value == true) {
        this.empleadoServices.deleteEmpleado(_id).subscribe(
          res => {
            console.log(res);
            this.getEmpleados();
    
          },
          err => console.log(err)
        )
        Swal.fire(
          'Empleado eliminado',
          '',
          'success'
        )
      }
    })
  }

  updateEmpleado(empleados:Empleados){

    this.empleadoServices.selectedEmpleado._id = empleados._id;
    this.empleadoServices.selectedEmpleado.nombreEmpleado = empleados.nombreEmpleado;
    this.empleadoServices.selectedEmpleado.apellidosEmpleado = empleados.apellidosEmpleado;
    this.empleadoServices.selectedEmpleado.direccionEmpleado = empleados.direccionEmpleado;
    this.empleadoServices.selectedEmpleado.CURPEmpleado = empleados.CURPEmpleado;
    this.empleadoServices.selectedEmpleado.NSSEmpleado = empleados.NSSEmpleado;
    this.empleadoServices.selectedEmpleado.estudiosEmpleado = empleados.estudiosEmpleado;
    this.empleadoServices.selectedEmpleado.fNacEmpleado = empleados.fNacEmpleado;
    this.empleadoServices.selectedEmpleado.Categoria = empleados.Categoria;
    this.empleadoServices.selectedEmpleado.fechaIngreso = empleados.fechaIngreso;
    this.router.navigate(['/empleados']);
  }

  verEmpleado(_id:string){
    this.empleadoServices.getEmpleado(_id).subscribe(
      res =>{
        this.empleado = res;
      }
    )
  }
}
