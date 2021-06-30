import { Component, OnInit } from '@angular/core';
import {ConsultproyectService} from '../../services/consultproyect.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public count;
public count1;
public count2;
  constructor(public consultaProyect:ConsultproyectService) { }

  ngOnInit() {

    this.getTotales();
    this.getVencidos();
    this.getxVencer();
  }

  getTotales(){
    this.consultaProyect.getTotales().subscribe(
      res=>{
        this.count = res;
      }
    )
  }

  getVencidos(){
    this.consultaProyect.getVencidos().subscribe(
      res=>{
        this.count1 = res;
      }
    )
  }

  getxVencer(){
    this.consultaProyect.getVencer().subscribe(
      res=>{
        this.count2 = res;
      }
    )
  }

}
