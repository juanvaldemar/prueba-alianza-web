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

  ngOnInit(): void {
    this.getlistAbogados();
  }


  getlistAbogados = () => {
    this.clienteService.getAbogados().subscribe((response: any) => {
      this.abogados = response;
    })
  }

}
