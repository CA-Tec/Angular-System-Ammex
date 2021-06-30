import { Component, OnInit } from '@angular/core';
import { EmpleadosService} from '../../services/empleados.service';
import {CatempleadoService} from '../../services/catempleado.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
   this.empleadoServices.addEmpleados(form.value).subscribe(
     res =>{
       console.log(res)
      this.msj='Empleado Agregado';
      form.reset();
      this.toastr.success(this.msj);

     },
     err => console.log(err)
   )
  }


}
