import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

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
          this.msj='Producto Actualizado';
          this.toastr.info(this.msj);
          this.getProducto();
          form.reset();
        },
        err => console.log(err)
      )
    }else{
      this.productosService.createProducto(form.value).subscribe(
        res=>{
          this.msj ='Producto Agregado';
          this.toastr.success(this.msj);
          this.getProducto();
          form.reset();
        },
        err => console.log(err)
      )
    }
  }

  deleteProducto(_id:string){
    if(confirm('¿Desea eliminar el producto?')){
      this.productosService.deleteProducto(_id).subscribe(
        res=>{
          this.msj='Producto Elinimado';
          this.toastr.error(this.msj);
          this.getProducto();
        },
        err=> console.log(err)
      )
    }
  }

  updateProducto(producto:Productos){
    this.productosService.selectedProducto = producto;
  }

}
