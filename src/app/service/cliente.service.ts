import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente'
import { Abogados } from '../model/abogados'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

 
export class ClienteService {

  constructor(private http: HttpClient) { }
  

  guardarAbogados(abogado: Abogados): Observable<Abogados> {
    const urlEndpoint = 'https://abogado.azurewebsites.net/api/abogado/';

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

      return this.http.post<Abogados>(urlEndpoint, abogado, { headers: httpHeaders });
  }

  // getClientes(): Observable<Cliente[]> {
  //   const urlEndpoint = 'http://localhost:8080/api/v1/cliente';
    
  //   return this.http.get<Cliente[]>(urlEndpoint)
  // }

 
 

  getAbogados(ubicacion,especialidad): Observable<any> {
    let params = new HttpParams().set('ubicacion', ubicacion).set('especialidad', especialidad);
  
    return this.http.get<Cliente[]>(`https://abogado.azurewebsites.net/api/abogado/`, { params: params })
}

 


}
