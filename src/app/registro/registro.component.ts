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
  abogados: Array<Abogados> = [];
  itemAbogado6: Abogados;

  constructor(private clienteService: ClienteService,private router: Router) { 

    this.abogado = new Abogados();

  }

  ngOnInit(): void {


  }

  doSaveAbogados(){

    this.abogado.id = Math.floor(Math.random() * (0 - 1000)) + 1000;

    // if(localStorage.getItem("abogados") == null){
    //   localStorage.setItem("abogados", JSON.stringify(this.abogados));
    // }
   this.abogados = JSON.parse(localStorage.getItem("abogados"));

   
  this.itemAbogado6 = { 'id': this.abogado.id, 'nombres': this.abogado.nombres, 'registro_cal': this.abogado.registro_cal, 'especialidad': this.abogado.especialidad, 'ubicacion': this.abogado.ubicacion, 'horario_atencion': this.abogado.horario_atencion, 'ofrece': this.abogado.ofrece, 'numero': this.abogado.numero, 'refistro': new Date() };


   this.abogados.push(this.itemAbogado6)

    localStorage.setItem("abogados", JSON.stringify(this.abogados));

  console.log(JSON.parse(localStorage.getItem("abogados")))
  console.log(JSON.stringify(localStorage.getItem("abogados")))

    // this.abogado.id = Math.floor(Math.random() * (0 - 100000)) + 100000;
    // this.clienteService.guardarAbogados(this.abogado).subscribe((response: any) => {
    //   this.abogado = response;
    //   // alert("Success "+ this.abogado)
    //   this.router.navigate(['/busqueda']);
    //     console.log("registro beba")
    // })
  }



}
