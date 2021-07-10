import { Pipe, PipeTransform } from '@angular/core';
import {ExcelService} from '../services/excel.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
constructor( public excelServices:ExcelService){

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
    console.log(resultPosts);
    return resultPosts.slice(page,page + 10);
    
  }

}
