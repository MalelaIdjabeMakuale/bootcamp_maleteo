import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { AuthenticationService } from '../services/authentication.service';
import { ServicesService } from '../services/services.service';
import { user } from '../interfaces/user_interface';

@Component({
  selector: 'app-chatlist',
  standalone: true,
  imports: [],
  templateUrl: './chatlist.component.html',
  styleUrl: './chatlist.component.css'
})
export class ChatlistComponent implements OnInit {
  constructor(private router:Router, private authentication:AuthenticationService, private servicio:ServicesService){}
  id!:string | null;
  user!:user;
  chats = [];
  ngOnInit(): void {
    this.id = localStorage.getItem('id_user');
    this.getData();
    if(!this.authentication.isAuthenticated()){
      swal('¡No puedes acceder si no estas identificado!');
      this.router.navigate(['/registro'])
    }
  }
  getData(){
    this.servicio.getUserId(this.id).subscribe((data:any) => {
      this.chats = data.data.chats;
      console.log("chats del data en chatlist", this.chats);
    }
    )
  }
  startchat(roomNumber:any){

    localStorage.setItem("roomNumber", roomNumber);
    console.log(roomNumber);
    this.router.navigate(['/chat'])
  }


}
