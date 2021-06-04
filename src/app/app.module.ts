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



const routes: Routes = [
  { path: '',component:MainComponent},
  { path: 'login', component: MainComponent }, 

];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateUserComponent
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
  bootstrap: [AppComponent,MainComponent],
})
export class AppModule { }
