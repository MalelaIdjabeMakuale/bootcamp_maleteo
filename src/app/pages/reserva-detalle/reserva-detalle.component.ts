import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';
<<<<<<< HEAD
import { AuthenticationService } from '../../services/authentication.service';
import swal from 'sweetalert';

=======
import swal from 'sweetalert';
>>>>>>> origin/deleteLocal
@Component({
  selector: 'app-reserva-detalle',
  standalone: true,
  imports: [],
  templateUrl: './reserva-detalle.component.html',
  styleUrl: './reserva-detalle.component.css'
})
export class ReservaDetalleComponent implements OnInit{
  constructor(private router: Router, private servicesService:ServicesService, private authentication:AuthenticationService) { }
  idLocker = localStorage.getItem("selectedLockeId")
  lockerUpdate = {"bookings": "aaaaaaa"};
  


  reservar(): void {
    this.servicesService.updateLocker(this.idLocker,this.lockerUpdate).subscribe(
      (response) => {

        console.log("soy la response",response)

        console.log('Usuario actualizado con la estacion');
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      }
    );

swal ('¡Reserva realizada!');
    this.router.navigate(['/otra-pagina']);//poner el componente de reserva realizada
  }

  ngOnInit(): void {
    if(!this.authentication.isAuthenticated()){
      swal('¡No puedes acceder si no estas identificado!');
      this.router.navigate(['/registro'])
    }
  

    const arrivalDate = localStorage.getItem("dayPutForm");
    const departureDate =  localStorage.getItem("dayOutForm");
    const luggageCount = 2;
    const pricePerDay = 6;

    const totalAmount =  (pricePerDay * this.getNumberOfDays(arrivalDate!, departureDate!)) + 2;

    const arrivalDateElement = document.getElementById('arrivalDate');// Obtenemos el elemento con ID 'arrivalDate'
    if (arrivalDateElement) {
      arrivalDateElement.textContent = arrivalDate; //asignamos la fecha de llegada
    }

    //esto mismo con el resto de los elementos (salida, equipaje...)

    const departureDateElement = document.getElementById('departureDate');
    if (departureDateElement) {
      departureDateElement.textContent = departureDate;
    }

    const luggageCountElement = document.getElementById('luggageCount');
    if (luggageCountElement) {
      luggageCountElement.textContent = luggageCount.toString();
    }

    const pricePerDayElement = document.getElementById('pricePerDay');
    if (pricePerDayElement) {
      pricePerDayElement.textContent = pricePerDay.toString();
    }

    const totalAmountElement = document.getElementById('totalAmount');
    if (totalAmountElement) {
      totalAmountElement.textContent = totalAmount.toString();
    }

    const reserveButton = document.getElementById('reserveButton');
    if (reserveButton) {
      reserveButton.addEventListener('click', ()=> {
        this.reservar();

          // Aquí debería llevar a otra pagina de reserva confirmada y añadir a esa página el botón para poder abrir chat.
      });
    }
  }

  // Función para calcular el número de días entre dos fechas
  getNumberOfDays(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((start.getTime() - end.getTime()) / oneDay));
    return diffDays;
  }
}
