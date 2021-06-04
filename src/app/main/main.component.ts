import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service'
import { Cliente } from '../model/cliente'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  clientes: Cliente[] = [];


  constructor(private clienteService: ClienteService) {


  }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(response => {
      console.log(response);
      this.clientes = response;
    })

  }


}
