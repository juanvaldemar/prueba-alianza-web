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
import { InicioComponent } from './inicio/inicio.component';
import { InformacionJuridicaComponent } from './informacion-juridica/informacion-juridica.component';
import { JurisprudenciaComponent } from './jurisprudencia/jurisprudencia.component';
import { NormativaComponent } from './normativa/normativa.component';
import { InfoJuriComponent } from './info-juri/info-juri.component';
import { ExposicionComponent } from './exposicion/exposicion.component';
import { CodigoPenalComponent } from './codigo/codigo-penal/codigo-penal.component';
import { CodigoCivilComponent } from './codigo/codigo-civil/codigo-civil.component';



const routes: Routes = [
  { path: '',component:InicioComponent},
  { path: 'inicio',component:InicioComponent},
  { path: 'busqueda',component:BusquedaComponent},
  { path: 'informacion-juridica',component:InformacionJuridicaComponent},
  { path: 'listado', component: ListadoComponent }, 
  { path: 'registro', component: RegistroComponent }, 
  { path: 'jurisprudencia', component: JurisprudenciaComponent }, 
  { path: 'normativa', component: NormativaComponent }, 
  { path: 'exposicion', component: ExposicionComponent }, 
  { path: 'penal', component: CodigoPenalComponent }, 
  { path: 'civil', component: CodigoCivilComponent }, 

];

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    BusquedaComponent,
    ListadoComponent,
    RegistroComponent,
    InicioComponent,
    InformacionJuridicaComponent,
    JurisprudenciaComponent,
    NormativaComponent,
    InfoJuriComponent,
    ExposicionComponent,
    CodigoPenalComponent,
    CodigoCivilComponent
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
