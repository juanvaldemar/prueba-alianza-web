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
import { PerfilComponent } from './perfil/perfil.component';
import { PenalComponent } from './normativa/codigos/penal/penal.component';
import { CivilComponent } from './normativa/codigos/civil/civil.component';
import { Constitucion1993Component } from './normativa/codigos/constitucion1993/constitucion1993.component';
import { ConsumidorComponent } from './normativa/codigos/consumidor/consumidor.component';
import { CodigoprocesalPenalComponent } from './normativa/codigos/codigoprocesal-penal/codigoprocesal-penal.component';



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
  { path: 'exposicion/penal', component: PenalComponent }, 
  { path: 'exposicion/civil', component: CivilComponent },
  { path: 'exposicion/constitucion1993', component: Constitucion1993Component },
  { path: 'exposicion/consumidor', component: ConsumidorComponent},
  { path: 'exposicion/codigoprocesal-penal', component: CodigoprocesalPenalComponent}, 
  { path: 'perfil', component: PerfilComponent }, 

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
    CodigoCivilComponent,
    PerfilComponent,
    PenalComponent,
    CivilComponent,
    Constitucion1993Component,
    ConsumidorComponent,
    CodigoprocesalPenalComponent
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
