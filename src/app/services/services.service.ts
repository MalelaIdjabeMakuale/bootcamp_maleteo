import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../interfaces/user_interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = 'https://api-plum-six.vercel.app/api/estaciones';
  private apiUrl2 = `https://api-plum-six.vercel.app/api/user`;



  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getUserId(id:any):Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl2}/${id}`);
  }
  //funcion para hacer get para los anuncios detalle
  getEstablecimientoById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`; 
    return this.http.get<any>(url);
  }
  //funcion para guardar las coordenadas longitude y latitude al hacer el formulario
  guardarCoordenadas(coordenadas: {latitude:number, longitude:number}): Observable<any>{
    return this.http.post<any>(this.apiUrl, coordenadas);
  }
  //funcion para enviar los datos del formulario a iniciar sesion:
  loginUser(user:user):Observable<any>{
    return this.http.post<any>(`${this.apiUrl2}/login`, user)
  }
  //lo mismo pero para registrarse
  registerUser(user:user):Observable<any>{
    return this.http.post<any>(`${this.apiUrl2}/register`, user)
  }
}