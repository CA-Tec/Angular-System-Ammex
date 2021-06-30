import { Component, OnInit } from '@angular/core';
import {ConsultproyectService} from '../../services/consultproyect.service';

@Component({
  selector: 'app-listavencidos',
  templateUrl: './listavencidos.component.html',
  styleUrls: ['./listavencidos.component.css']
})
export class ListavencidosComponent implements OnInit {
  public vencidos;
  public count;
  constructor(public consultProyect:ConsultproyectService) { }

  ngOnInit() {
    this.getVencido();
  }

  getVencido(){
    this.consultProyect.getVencidos().subscribe(
      res=>{
        this.vencidos= res;
        console.log(this.vencidos);
      }
    )
  }

}
