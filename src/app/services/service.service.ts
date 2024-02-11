import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public baseUrl:string="https://api-bobysoft86-robertrodriguezs-projects.vercel.app/api/user"

  public usersUrl: string =`${this.baseUrl}`


  constructor(private http:HttpClient) { this.usersUrl = `${this.baseUrl}`; }
  public getUsers(){
    return this.http.get(this.usersUrl)
  }

  public postUser(user: any) {
    return this.http.post(this.usersUrl, user);
  }

  public deleteUser(id: string) {
    return this.http.delete(`${this.usersUrl}/${id}`);
  }

  public getUsersByiD(id: string) {
    return this.http.get(`${this.usersUrl}/${id}`);
  }

  public modificarUser(id: string, user: any) {
    return this.http.patch(`${this.usersUrl}/${id}`, user);
  }

}
