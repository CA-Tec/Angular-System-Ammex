import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DivisionService } from '../../services/division.service';
import {ToastrService} from 'ngx-toastr';

import Swal from 'sweetalert2';

import {Division} from '../../model/division';
 
@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  public datos;
  public msj;
  constructor(public divisionServices:DivisionService,public toastr:ToastrService) { }

  ngOnInit() {
    this.getDivision();
  }

  resetForm(form:NgForm){
    form.reset();
    this.getDivision();
  }

  getDivision(){
    this.divisionServices.getDivisiones().subscribe(
      res=>{
        this.datos = res;
      }
    )
  }

  createDivision(form:NgForm){
    if(form.value._id){
      this.divisionServices.putDivision(form.value).subscribe(
        res => {
          this.msj ='Division Actualizada';
          //this.toastr.info(this.msj);
          this.msjUpdate();
          this.getDivision();
          form.reset();
        }
      )
    }else{
      this.divisionServices.createDivision(form.value).subscribe(
        res=>{
          this.msj='Division Agregada';
          //this.toastr.success(this.msj);
          this.msjConfirm();
          this.getDivision();
          form.reset();
        }
      )
    }

  }

  deleteDivision(_id:string){
    Swal.fire({
      title: '¿Desea eliminar la División?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      console.log(result);
      if (result.value == true) {
        this.divisionServices.deleteDivision(_id).subscribe(
          res =>{
            //this.msj ='Division Eliminada';
            //this.toastr.error(this.msj);
            this.getDivision();
          }
        )
        Swal.fire(
          'División eliminada',
          '',
          'success'
        )
      }
    })


  }

  updateDivision(division:Division){
    this.divisionServices.selectedDivision = division;
  }

//Ventanas de notificacion

  msjConfirm(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'División Agregada',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

  msjUpdate(){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'División Actualizada',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

}
