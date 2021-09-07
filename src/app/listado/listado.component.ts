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



  itemAbogado1: Abogados = { 'id': 111, 'nombres': 'Valdemar', 'registro_cal': '12345', 'especialidad': 'Civil', 'ubicacion': 'SJL', 'horario_atencion': '1', 'ofrece': 'ofrece', 'numero': 987987987, 'refistro': new Date() };
  itemAbogado2: Abogados = { 'id': 222, 'nombres': 'Raul', 'registro_cal': '12345', 'especialidad': 'Civil', 'ubicacion': 'SJL', 'horario_atencion': '1', 'ofrece': 'ofrece', 'numero': 987987987, 'refistro': new Date() };
  itemAbogado3: Abogados = { 'id': 333, 'nombres': 'Moises', 'registro_cal': '12345', 'especialidad': 'Civil', 'ubicacion': 'SJL', 'horario_atencion': '1', 'ofrece': 'ofrece', 'numero': 987987987, 'refistro': new Date() };
  itemAbogado4: Abogados = { 'id': 4, 'nombres': 'Ronal', 'registro_cal': '12345', 'especialidad': 'Civil', 'ubicacion': 'SJL', 'horario_atencion': '1', 'ofrece': 'ofrece', 'numero': 987987987, 'refistro': new Date() };
  itemAbogado5: Abogados = { 'id': 5, 'nombres': 'Marta', 'registro_cal': '12345', 'especialidad': 'Civil', 'ubicacion': 'SJL', 'horario_atencion': '1', 'ofrece': 'ofrece', 'numero': 987987987, 'refistro': new Date() };
  itemAbogado6: Abogados = { 'id': 6, 'nombres': 'Mirian', 'registro_cal': '12345', 'especialidad': 'Civil', 'ubicacion': 'SJL', 'horario_atencion': '1', 'ofrece': 'ofrece', 'numero': 987987987, 'refistro': new Date() };

  constructor(private clienteService: ClienteService) { }

  ubicacion: string = '';
  especialidad: string = '';

  ngOnInit(): void {
    this.getlistAbogados();
    this.ubicacion = localStorage.getItem("ubicacion");
    this.especialidad = localStorage.getItem("especialidad");
  }


  getlistAbogados = () => {

    if (localStorage.getItem("abogados") == null) {
      this.abogados.push(this.itemAbogado1);
      this.abogados.push(this.itemAbogado2);
      this.abogados.push(this.itemAbogado3);
      // this.abogados.push(this.itemAbogado4);
      // this.abogados.push(this.itemAbogado5);
      // this.abogados.push(this.itemAbogado6);
      localStorage.setItem("abogados", JSON.stringify(this.abogados));

    }

    if (localStorage.getItem("abogados") == "") {
      this.abogados.push(this.itemAbogado1);
      this.abogados.push(this.itemAbogado2);
      this.abogados.push(this.itemAbogado3);
      // this.abogados.push(this.itemAbogado4);
      // this.abogados.push(this.itemAbogado5);
      // this.abogados.push(this.itemAbogado6);
      localStorage.setItem("abogados", JSON.stringify(this.abogados));

    }

    if (localStorage.getItem("abogados") != null) {
      this.abogados = JSON.parse(localStorage.getItem("abogados"));
    }

    console.log(localStorage.getItem("abogados"))

    // this.clienteService.getAbogados(localStorage.getItem("ubicacion"),localStorage.getItem("especialidad")).subscribe((response: any) => {
    //   this.abogados = response;
    // })
  }

}
