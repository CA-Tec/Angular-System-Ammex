import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
public datos;
  constructor(public router:Router) { }

  ngOnInit() {
    this.vermenu();
    
  }
  
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  vermenu(){
    this.datos = localStorage.getItem('token');
 
  }

  recargar(){
    window.location.reload();
  }
}
