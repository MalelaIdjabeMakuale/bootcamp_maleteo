import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';
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
  styleUrl: './reserva-confirmada.component.css',
})
export class ReservaConfirmadaComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private servicio: ServicesService,
    private authService: AuthenticateService,
    private router: Router
  ) {}
  id!: string | null;
  user!: user;
  reservas = [];
  chats = [];
  ngOnInit(): void {
    this.id = localStorage.getItem('id_user');
    this.getData();
    const token = localStorage.getItem('token');
    console.log('Token de autenticación:', token);

    this.authService.authenticate(token!).subscribe(
      (response) => {
        console.log('Autenticación exitosa', response);
      },
      (error) => {
        console.error('Error de autenticación', error);
        this.router.navigate(['/registro']);
      }
    );
  }
  getData() {
    this.servicio.getUserId(this.id).subscribe((data: any) => {
      this.user = data.data;
      this.reservas = this.user.estaciones[0].bookings;
      console.log('Esto son las reservas', this.reservas);
      this.chats = data.data.chats;
      console.log('Esto son los chats', this.chats);
    });
  }
  aceptarReserva(reserva: any) {
    const chatUpdate = { chats: reserva };

    const clientId = reserva.split('_', 1);

    console.log('soy el numero de clientId??', clientId[0]);
    this.servicio.updateUser(clientId[0], chatUpdate).subscribe(
      (response) => {
        console.log('soy la response', response);
        console.log('soy de el update', this.id);
        console.log('Usuario actualizado con la estacion');
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      }
    );




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
