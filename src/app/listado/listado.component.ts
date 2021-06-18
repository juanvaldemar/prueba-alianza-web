import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service'
import { Abogados } from '../model/abogados'
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  abogados: Array<Abogados> = [];
  constructor(private clienteService: ClienteService) { }

  ubicacion : string  = '';
  especialidad : string  = '';

  ngOnInit(): void {
    this.getlistAbogados();
    this.ubicacion = localStorage.getItem("ubicacion");
    this.especialidad = localStorage.getItem("especialidad");
  }


  getlistAbogados = () => {

    this.clienteService.getAbogados(localStorage.getItem("ubicacion"),localStorage.getItem("especialidad")).subscribe((response: any) => {
      this.abogados = response;
    })
  }

}
