import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = 'https://api-two-sigma.vercel.app/api/estaciones';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  //funcion para hacer get para los anuncios detalle
  getEstablecimientoById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`; 

    return this.http.get<any>(url);
  }
}