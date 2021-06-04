import { Component } from '@angular/core';
import { ClienteService } from './service/cliente.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-prueba-alianza';

  
  constructor(private clienteService: ClienteService) { 

  }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(response =>{
      console.log(response);
    })

  }


}
