import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

import {Ciudad} from '../../model/ciudad';
import {CiudadService} from '../../services/ciudad.service';
 
@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
public datos;
public datos2;
public msj;
  constructor( public ciudadServices:CiudadService, public toastr:ToastrService) { }

  ngOnInit() {
    this.getCiudad();
    this.getDivision();
  }

  resetForm(form:NgForm){
    form.reset();
    this.getCiudad();
  }
  getDivision(){
    this.ciudadServices.getDivision().subscribe(
      res =>{
        this.datos2=res
        console.log(this.datos2);
      },
      err=> console.log(err)
    )
  }

  getCiudad(){
    this.ciudadServices.getCiudad().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    )
  }

  addCiudad(form:NgForm){
    if(form.value._id){
      this.ciudadServices.updateCiudad(form.value).subscribe(
        res =>{
          this.msj='Ciudad Actualizada...';
          this.toastr.info(this.msj);
          this.getCiudad();
          form.reset();
        },
        err=> console.log(err)
      )
    }else{
      this.ciudadServices.createCiudad(form.value).subscribe(
        res=>{
          this.msj='Ciudad Agregada..';
          this.toastr.success(this.msj);
          this.getCiudad();
          form.reset();
        },
        err => console.log(err)
      )
    }
  }

  updateCiudad(ciudad:Ciudad){
    this.ciudadServices.selectedCiudad=ciudad;
  }

  deleteCiudad(_id:string){
    if(confirm('¿Desea eliminar la ciudad?')){
      this.ciudadServices.deleteCiudad(_id).subscribe(
        res=>{
          this.msj='Ciudad Eliminado...';
          this.toastr.error(this.msj);
          this.getCiudad();
        },
        err => console.log(err)
      )
    }
  }

}
