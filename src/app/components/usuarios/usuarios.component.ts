import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsuariosService} from '../../services/usuarios.service';
import {Usuarios} from '../../model/usuarios';

import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public msj;
  public datos;
  public roles;
  constructor(public usuarioService:UsuariosService, public toastr:ToastrService) { }

  ngOnInit() {
    this.getUsuario();
    this.getRoles();
  }


  resetUsuario(form:NgForm){
    form.reset();
    this.getUsuario();
  }

  getUsuario(){
   
    this.usuarioService.getUsuario().subscribe(
      res=>{
        this.datos = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  addUsuario(form:NgForm){
    if(form.value._id){
      this.usuarioService.putUsuario(form.value).subscribe(
        res =>{
          this.msj='Usuario Actualiado';
          this.toastr.info(this.msj);
          this.getUsuario();
          form.reset();
        },
        err => console.log(err)
      )
    }else{
      this.usuarioService.createUsuario(form.value).subscribe(
        res =>{
          this.msj='Usuario Agregado';
          this.toastr.success(this.msj);
          this.getUsuario();
          form.reset();
        },
        err => console.log(err)
      )
    }
  }

  updateUsuario(usuarios:Usuarios){
    this.usuarioService.selectedUsuario = usuarios;

  }

  deleteUsuario(_id:string){
    if(confirm('¿Desea eliminar el usuario?')){
      this.usuarioService.deleteUsuario(_id).subscribe(
        res=>{
          this.msj='Usuario Eliminado';
          this.toastr.error(this.msj);
          this.getUsuario();
        },
        err => console.log(err)
      )
    }
  }

  getRoles(){
  this.usuarioService.getRoles().subscribe(
    res =>{
      this.roles = res;
    }
  )
  }

}
