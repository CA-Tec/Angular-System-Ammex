import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public datos;
  constructor(public router:Router) { }

  ngOnInit() {
    this.usuario();
  }

  usuario(){
    this.datos = localStorage.getItem('User');
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  
  }

}
