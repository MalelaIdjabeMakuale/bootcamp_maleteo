import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated(): boolean{
    const token = localStorage.getItem('token');
    alert('No puedes acceder si no estás identificado!')
    return token !==null && token!==undefined && token!=="";
  }
}
