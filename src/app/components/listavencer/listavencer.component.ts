import { Component, OnInit } from '@angular/core';
import {ConsultproyectService} from '../../services/consultproyect.service';

@Component({
  selector: 'app-listavencer',
  templateUrl: './listavencer.component.html',
  styleUrls: ['./listavencer.component.css']
})
export class ListavencerComponent implements OnInit {

  constructor(public consultProduct:ConsultproyectService) { }
  public vencer;
  ngOnInit() {
    this.getxVencer();
  }

  getxVencer(){
    this.consultProduct.getVencer().subscribe(
      res=>{
        this.vencer = res;
      }
    )
  }

}
