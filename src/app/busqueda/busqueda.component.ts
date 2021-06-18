import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  opcionEspecialidad: string  = '';
  opcionUbicacion: string  = '';
  ubicacion_: string = '';
  especialidad_: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  capturar() {
    console.log(this.opcionEspecialidad);
    console.log(this.opcionUbicacion);
    this.especialidad_ = this.opcionEspecialidad;
    this.ubicacion_ = this.opcionUbicacion;
  }
  goListado(){
 
    
    localStorage.setItem("especilidad", this.especialidad_);
    localStorage.setItem("ubicacion", this.ubicacion_);

    // this.router.navigate(['listado']);
  }

}
