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
  //funcion para registrar locker(estacion):
  registerLocker(locker:any):Observable<any>{
    const url=`${this.apiUrl}`;
    return this.http.post<any>(url, locker);
  }
  //funcion para enviar los datos del formulario a iniciar sesion:
  loginUser(user:user):Observable<any>{
    return this.http.post<any>(`${this.apiUrl2}/login`, user)
  }
  //lo mismo pero para registrarse
  registerUser(user:user):Observable<any>{
    return this.http.post<any>(`${this.apiUrl2}/register`, user)
  }
  updateUser(userId:string, locker:string):Observable<any>{
    const updateUrl = `${this.apiUrl2}/register/${userId}`;
    const body={locker};
    return this.http.patch(updateUrl, body);
  }
}