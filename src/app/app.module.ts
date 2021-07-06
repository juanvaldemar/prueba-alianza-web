import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';


import { FormsModule } from '@angular/forms';


import { MaterializeModule } from 'angular2-materialize';
import { CreateUserComponent } from './modal/create-user/create-user.component';


import {MatDialogModule} from '@angular/material/dialog';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListadoComponent } from './listado/listado.component';
import { RegistroComponent } from './registro/registro.component';



const routes: Routes = [
  { path: '',component:BusquedaComponent},
  { path: 'listado', component: ListadoComponent }, 
  { path: 'registro', component: RegistroComponent }, 

];

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    BusquedaComponent,
    ListadoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
