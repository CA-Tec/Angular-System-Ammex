import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

import Swal from 'sweetalert2';

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
          //this.toastr.info(this.msj);
          this.msjUpdate();
          this.getCiudad();
          form.reset();
        },
        err=> console.log(err)
      )
    }else{
      this.ciudadServices.createCiudad(form.value).subscribe(
        res=>{
          this.msj='Ciudad Agregada..';
          //this.toastr.success(this.msj);
          this.msjConfirm();
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
    Swal.fire({
      title: '¿Desea eliminar la Ciudad?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      console.log(result);
      if (result.value == true) {
        this.ciudadServices.deleteCiudad(_id).subscribe(
          res=>{
            this.getCiudad();
          },
          err => console.log(err)
        )
        Swal.fire(
          'Ciudad eliminada',
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
      title: 'Ciudad Agregada',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

  msjUpdate(){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Ciudad Actualizada',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

}
