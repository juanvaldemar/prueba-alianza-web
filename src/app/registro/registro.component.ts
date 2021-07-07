import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


import { ClienteService } from '../service/cliente.service'
import { Abogados } from '../model/abogados'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  abogado: Abogados;

  constructor(private clienteService: ClienteService,private router: Router) { 

    this.abogado = new Abogados();

  }

  ngOnInit(): void {
  }

  doSaveAbogados(){
    this.abogado.id = Math.floor(Math.random() * (0 - 100000)) + 100000;
    this.clienteService.guardarAbogados(this.abogado).subscribe((response: any) => {
      this.abogado = response;
      // alert("Success "+ this.abogado)
      this.router.navigate(['busqueda']);
        console.log("registro beba")
    })
  }



}
