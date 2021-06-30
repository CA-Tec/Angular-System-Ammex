import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

import {EmpleadosComponent} from './components/empleados/empleados.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ListaempleadosComponent} from './components/listaempleados/listaempleados.component';
import {CategoriaempleadoComponent} from './components/categoriaempleado/categoriaempleado.component';
import {DivisionComponent} from './components/division/division.component';
import {CatDocumentosComponent}from './components/cat-documentos/cat-documentos.component';
import {ProductosComponent} from './components/productos/productos.component';
import {CiudadComponent} from './components/ciudad/ciudad.component';

import {UsuariosComponent} from './components/usuarios/usuarios.component';
import {ProyectosComponent} from './components/proyectos/proyectos.component';
import {ListaProyectosComponent} from './components/lista-proyectos/lista-proyectos.component';
import {LoginComponent} from './components/login/login.component';
import {App2Component} from './components/app2/app2.component';
import {ListavencidosComponent} from './components/listavencidos/listavencidos.component';
import {ListavencerComponent} from './components/listavencer/listavencer.component';
import {VerproyectoComponent} from './components/verproyecto/verproyecto.component';

import {AuthGuard} from './auth.guard';

const appRoutes = [
    {path:'login',component:LoginComponent},
    {path:'',component:App2Component,children:[
        {path:'',component:DashboardComponent,canActivate:[AuthGuard]},
        {path:'empleados',component:EmpleadosComponent,canActivate:[AuthGuard]},
        {path:'listaEmpleados',component:ListaempleadosComponent,canActivate:[AuthGuard]},
        {path:'categoriaEmpleados',component:CategoriaempleadoComponent,canActivate:[AuthGuard]},
        {path:'division',component:DivisionComponent,canActivate:[AuthGuard]},
        {path:'cat-documentos',component:CatDocumentosComponent,canActivate:[AuthGuard]},
        {path:'productos',component:ProductosComponent,canActivate:[AuthGuard]},
        {path:'ciudad',component:CiudadComponent,canActivate:[AuthGuard]},
        {path:'usuarios',component:UsuariosComponent,canActivate:[AuthGuard]},
        {path:'proyectos',component:ProyectosComponent,canActivate:[AuthGuard]},
        {path:'listaproyectos',component:ListaProyectosComponent,canActivate:[AuthGuard]},
        {path:'listavencidos',component:ListavencidosComponent,canActivate:[AuthGuard]},
        {path:'listavencer',component:ListavencerComponent,canActivate:[AuthGuard]},
        {path:'verproyecto/:id',component:VerproyectoComponent,canActivate:[AuthGuard]}

    ]},
       
    
];

export const routing = RouterModule.forRoot(appRoutes);