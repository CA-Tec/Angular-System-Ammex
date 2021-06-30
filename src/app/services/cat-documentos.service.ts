import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {CatDocumentos} from '../model/cat-documentos';

@Injectable({
  providedIn: 'root'
})
export class CatDocumentosService {

  URL_API = 'http://165.232.131.165/';
  constructor(private http:HttpClient) { }

  selectedCatDoc:CatDocumentos={
    nombreDoc:'',
    aliasDoc:'',
    observacionDoc:''
  }
  catDoc:CatDocumentos[];


  getCatDoc(){
    return this.http.get<any>(this.URL_API+'cat-documento');
  }

  createCatDoc(catDoc:CatDocumentos){
    return this.http.post(this.URL_API+'cat-documento',catDoc);
  }

  putCatDoc(catDoc:CatDocumentos){
    return this.http.put(this.URL_API+'cat-documento/'+catDoc._id,catDoc);
  }

  deleteCatDoc(_id:string){
    return this.http.delete(this.URL_API+'cat-documento/'+_id);
  }
}
