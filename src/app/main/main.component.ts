import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service'
import { Cliente } from '../model/cliente'
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../modal/create-user/create-user.component';
// import { ExportToCsv } from 'export-to-csv';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // this.getlistClients()
  }

  // funciontemp = ($event) => {
  //   console.log("TYPING : ", $event);
    
  // }

  // getlistClients = () => {
  //   this.clienteService.getClientes().subscribe((response: any) => {
  //     this.clientes = response;
  //     this.clientsFilters = this.clientes;
  //   })
  // }

  // eventSearchUsers = (textFilter) => {
  //   this.clientsFilters = this.clientes.filter( itemUser => itemUser.bussiness_id.includes(textFilter))
  // }

  

  // animal: string;
  // name: string;

  // eventExportExcel = () => {
  //   this.csvExporter.generateCsv(this.clientes);
  // }


  // openDialog(): void {
  //   const dialogRef = this.dialog.open(CreateUserComponent, {
  //     width: '500px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }


}
