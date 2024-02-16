import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { ServicesService } from '../../services/services.service';
import { SharedService } from '../../services/shared.service';
import { user } from '../../interfaces/user_interface';


@Component({
  selector: 'app-reserva-confirmada',
  standalone: true,
  imports: [],
  templateUrl: './reserva-confirmada.component.html',
  styleUrl: './reserva-confirmada.component.css'
})
export class ReservaConfirmadaComponent implements OnInit {
  constructor(private sharedService:SharedService ,private servicio: ServicesService,private authentication:AuthenticationService, private router:Router){}
  id!:string | null;
  user!:user;
  reservas=[];
  chats=[];
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
    this.user = data.data;
    this.reservas = this.user.estaciones[0].bookings;
    console.log("Esto son las reservas", this.reservas);
    this.chats = data.data.chats;
    console.log("Esto son los chats", this.chats);
  }
  )
}
aceptarReserva(reserva:any){
          const chatUpdate = {chats:reserva}
          this.servicio.updateUser(this.id,chatUpdate).subscribe(
            (response) => {
              console.log('soy la response', response);
              console.log('soy de el update', this.id);
              console.log('Usuario actualizado con la estacion');
            },
            (error) => {
              console.error('Error al actualizar el usuario', error);
            }
          );
          this.router.navigate(["chatlist"]);
  
}
eliminarReserva(){
  console.log("eliminar funciona");
  
  
}
}
