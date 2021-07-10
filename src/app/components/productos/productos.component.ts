import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

import Swal from 'sweetalert2';

import {ProductosService} from '../../services/productos.service';
import {Productos} from '../../model/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public msj;
  public datos;
  constructor(public productosService:ProductosService, public toastr:ToastrService) { }

  ngOnInit() {
    this.getProducto();
  }

  resetProducto(form:NgForm){
    form.reset();
    this.getProducto();
  }

  getProducto(){
    this.productosService.getProducto().subscribe(
      res =>{
        this.datos = res;
      },
      err => console.log(err)
    )
  }

  addProducto(form:NgForm){
    if(form.value._id){
      this.productosService.putProducto(form.value).subscribe(
        res =>{
          this.msjUpdate();
          this.getProducto();
          form.reset();
        },
        err => console.log(err)
      )
    }else{
      this.productosService.createProducto(form.value).subscribe(
        res=>{
          this.msjConfirm();
          this.getProducto();
          form.reset();
        },
        err => console.log(err)
      )
    }
  }

  deleteProducto(_id:string){


    Swal.fire({
      title: '¿Desea eliminar el Producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#c23616',
      cancelButtonColor: '#353b48',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      console.log(result);
      if (result.value == true) {
        this.productosService.deleteProducto(_id).subscribe(
          res=>{

            this.getProducto();
          },
          err=> console.log(err)
        )
        Swal.fire(
          'Producto eliminado',
          '',
          'success'
        )
      }
    })


  }

  updateProducto(producto:Productos){
    this.productosService.selectedProducto = producto;
  }

  msjConfirm(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto Agregado',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

  msjUpdate(){
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Producto Actualizado',
      showConfirmButton: false,
      timer: 2000
    })
    
  }

}
