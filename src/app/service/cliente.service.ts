import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente'
import { Abogados } from '../model/abogados'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  

  // guardarCLiente(cliente: Cliente): Observable<Cliente> {
  //   const urlEndpoint = 'http://localhost:8080/api/v1/cliente';

  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });

  //   return this.http.post<Cliente>(urlEndpoint, cliente, { headers: httpHeaders });
  // }

  // getClientes(): Observable<Cliente[]> {
  //   const urlEndpoint = 'http://localhost:8080/api/v1/cliente';
    
  //   return this.http.get<Cliente[]>(urlEndpoint)
  // }

  getAbogados(): Observable<Abogados[]> {
    const urlEndpoint = 'http://localhost:8080/api/abogado';
    
    return this.http.get<Abogados[]>(urlEndpoint)
  }



}
