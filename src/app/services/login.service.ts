import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {login} from '../model/login';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_API = 'http://165.232.131.165/';
  selectdLogin:login ={
    email:'',
    password:''
  }

  Login:login[];

  constructor(private http:HttpClient,private router: Router) { }


  loguear(Login:login){
    return this.http.post(this.URL_API+'auth',Login);
  }

  loggedIn():Boolean{
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('User');
    this.router.navigate(['/login'])
  }
}
