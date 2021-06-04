import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor(private clienteService: ClienteService) { 


  }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(response =>{
      console.log(response);
    })

  }

}
