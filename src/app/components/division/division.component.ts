import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DivisionService } from '../../services/division.service';
import {ToastrService} from 'ngx-toastr';
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
          this.toastr.info(this.msj);
          this.getDivision();
          form.reset();
        }
      )
    }else{
      this.divisionServices.createDivision(form.value).subscribe(
        res=>{
          this.msj='Division Agregada';
          this.toastr.success(this.msj);
          this.getDivision();
          form.reset();
        }
      )
    }

  }

  deleteDivision(_id:string){
    if(confirm('¿Desea eliminar la division?')){
      this.divisionServices.deleteDivision(_id).subscribe(
        res =>{
          this.msj ='Division Eliminada';
          this.toastr.error(this.msj);
          this.getDivision();
        }
      )
    }

  }

  updateDivision(division:Division){
    this.divisionServices.selectedDivision = division;
  }

}
