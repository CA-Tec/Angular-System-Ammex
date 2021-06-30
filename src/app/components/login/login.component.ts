import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public datos;
  constructor(public loginService:LoginService, public router:Router, public toastr:ToastrService) { }

  ngOnInit() {
    this.limpiar();
  }

  limpiar(){
    localStorage.clear();
  }

  loguear(form:NgForm){
    
    console.log(form.value);
    this.loginService.loguear(form.value).subscribe(
      res=>{
          this.datos = res;

          if(this.datos.message == "Contraseña Invalida"){
            this.toastr.error(this.datos.message);
          }

          if(this.datos.message == "Usuario no encontrado"){
            this.toastr.error(this.datos.message);
          }
          console.log(this.datos);
          localStorage.setItem('token',this.datos.token);
          localStorage.setItem('User',this.datos.buscarUser.nombreUsuario);
          this.router.navigateByUrl('/');
          form.reset();
      }
    )
  }

  limpiarform(form:NgForm){
    form.reset();
  }
}
