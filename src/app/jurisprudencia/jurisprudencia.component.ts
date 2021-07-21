import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurisprudencia',
  templateUrl: './jurisprudencia.component.html',
  styleUrls: ['./jurisprudencia.component.css']
})
export class JurisprudenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  goListado():void {
    alert("Servidor no disponible en este momento")
  }

}
