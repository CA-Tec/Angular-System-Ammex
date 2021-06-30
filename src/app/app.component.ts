import { Component, OnInit  } from '@angular/core';
import {LoginService} from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'inicio';
  public datos;
  public user;

  constructor(private loginsService:LoginService){}

  ngOnInit() {
    this.verificar();
    this.userName();
  }

  verificar(){
    this.datos = localStorage.getItem('token')
  }

  userName(){
    this.user = localStorage.getItem('User');
  }
  logout(){
    this.loginsService.logout();
  }
}
