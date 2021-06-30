import { Component, OnInit } from '@angular/core';
import { EmpleadosService} from '../../services/empleados.service';
import { ToastrService } from 'ngx-toastr';
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
  constructor(public empleadoServices:EmpleadosService, public toastr:ToastrService) { }

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
    console.log(_id);
    if(confirm('¿Desea eliminar el empleado?')){
      this.empleadoServices.deleteEmpleado(_id).subscribe(
        res => {
          console.log(res);
          this.msj = 'Empleado Eliminado..';
          this.toastr.error(this.msj);
          this.getEmpleados();
  
        },
        err => console.log(err)
      )
    }
  }

  updateEmpleado(empleados:Empleados){
    this.empleadoServices.selectedEmpleado = empleados;
    console.log(empleados);

  }

  verEmpleado(_id:string){
    this.empleadoServices.getEmpleado(_id).subscribe(
      res =>{
        this.empleado = res;
      }
    )
  }
}
