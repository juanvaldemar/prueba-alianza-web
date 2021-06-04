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

  users: Cliente;


  constructor(private clienteService: ClienteService) {

    this.users = new Cliente();
  }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(response => {
      console.log(response);
      this.clientes = response;
    })

  }

  guardarCliente(): void {
    // console.log(this.users.bussiness_id);
    if(this.users.bussiness_id== null && 
      this.users.phone == null&&
      this.users.email == null&&
      this.users.start_date == null&&
      this.users.end_date == null){
      alert('Debes completar todos los campos');
       return;
     }

    this.clienteService.guardarCLiente(this.users).subscribe(response => {
      console.log(response);
    })
  }


}
