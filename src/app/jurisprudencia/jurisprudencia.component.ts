import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurisprudencia',
  templateUrl: './jurisprudencia.component.html',
  styleUrls: ['./jurisprudencia.component.css']
})
export class JurisprudenciaComponent implements OnInit {
  condition: Boolean;
  condition1: Boolean;
  constructor() { }

  ngOnInit(): void {
    this.condition = false;
    this.condition1 = true;
  }


  goListado():void {
    this.condition = true;
    this.condition1 = false;
    // alert("Servidor no disponible en este momento")
  }

}
