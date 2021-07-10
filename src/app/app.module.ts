import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ExcelService} from './services/excel.service';
import { ToastrModule } from 'ngx-toastr';

import {routing} from './rutas.routes';


import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListaempleadosComponent } from './components/listaempleados/listaempleados.component';
import { CategoriaempleadoComponent } from './components/categoriaempleado/categoriaempleado.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { DivisionComponent } from './components/division/division.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { CatDocumentosComponent } from './components/cat-documentos/cat-documentos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ListaProyectosComponent } from './components/lista-proyectos/lista-proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { App2Component } from './components/app2/app2.component';
import { ListavencidosComponent } from './components/listavencidos/listavencidos.component';
import { ListavencerComponent } from './components/listavencer/listavencer.component';
import { VerproyectoComponent } from './components/verproyecto/verproyecto.component'; 
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';

import {AuthGuard} from './auth.guard';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    DashboardComponent,
    ListaempleadosComponent,
    CategoriaempleadoComponent,
    DivisionComponent,
    CiudadComponent,
    CatDocumentosComponent,
    ProductosComponent,
    UsuariosComponent,
    ProyectosComponent,
    ListaProyectosComponent,
    LoginComponent,
    MenuComponent,
    NavbarComponent,
    App2Component,
    ListavencidosComponent,
    ListavencerComponent,
    VerproyectoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule,
    MatDatepickerModule, MatNativeDateModule

  ],
  providers: [
    ExcelService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
