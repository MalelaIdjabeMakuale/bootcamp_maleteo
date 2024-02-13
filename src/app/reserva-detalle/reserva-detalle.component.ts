import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-detalle',
  standalone: true,
  imports: [],
  templateUrl: './reserva-detalle.component.html',
  styleUrl: './reserva-detalle.component.css'
})
export class ReservaDetalleComponent {
  constructor(private router: Router) { }

  reservar(): void {
    alert('¡Reserva realizada!');
    this.router.navigate(['/otra-pagina']);//poner el componente de reserva realizada
  }

  ngOnInit(): void {

    const arrivalDate = '2024-02-20';
    const departureDate = '2024-02-25';
    const luggageCount = 2;
    const pricePerDay = 6;

    const totalAmount = (pricePerDay * this.getNumberOfDays(arrivalDate, departureDate)) + 2;

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