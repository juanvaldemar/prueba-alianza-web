import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  opcionEspecialidad: string = '';
  opcionUbicacion: string = '';
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
  goListado() {


    localStorage.setItem("especialidad", this.especialidad_);
    localStorage.setItem("ubicacion", this.ubicacion_);
    let a = localStorage.getItem("ubicacion");
    let b = localStorage.getItem("especialidad");
    if (a == "") {
      // alert("Para continuar debe ingresar una ubicación")
      alert("Error al cargar")
    } else {
      this.router.navigate(['listado']);

    }

    console.log("Listando abogados...")
    console.log("Raúl Morales...")
    console.log("José Figueroa...")
    console.log("Manuel Cusihuaman...")
    console.log("Celeste Flores...")

  }
  goRegistro() {

    this.router.navigate(['registro']);


  }
}
