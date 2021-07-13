import { Pipe, PipeTransform } from '@angular/core';

import {DataUserService} from '../services/data-user.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
constructor( 
  public dataUserServices:DataUserService
  ){

}

  transform(proyectos: Array<any>, page: number = 0, search: string = '',resultPosts = []): any {
    
    if (search.length === 0)
    return proyectos.slice(page,page +10);
        
    for(const post of proyectos){
      if(post.nombreProyect.toLowerCase().indexOf(search.toLowerCase())> -1 ||
       post.folio.toLowerCase().indexOf(search.toLowerCase())> -1 || 
       post.status.toLowerCase().indexOf(search.toLowerCase())> -1 || 
       post.etapas.toLowerCase().indexOf(search.toLowerCase())> -1 ||
       post.producto.toLowerCase().indexOf(search.toLowerCase())> -1
       ){
         
        resultPosts.push(post);
      }
    }
    //this.dataUserServices.busqueda= resultPosts;
    console.log(resultPosts);
    return resultPosts.slice(page,page + 10);
    
  }

}
