import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { user } from '../../interfaces/user_interface';

import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-localizacion',
  standalone: true,
  imports: [],
  templateUrl: './localizacion.component.html',
  styleUrl: './localizacion.component.css',
})
export class LocalizacionComponent implements OnInit {
  allusers!: any[];
  selectedLocker:string="";

  constructor(private servicio: ServicesService) {}

  ngOnInit(): void {
    this.servicio.getAllUsers().subscribe((data: any) => {
      this.allusers = data.data;
      console.log(this.allusers); 
      this.createMap();
    });
  }

  createMap(): void {
    const map = new Map('map').setView([41.3851, 2.1734], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Utiliza los datos de this.allusers para crear marcadores según sea necesario
    this.allusers.forEach(element => {

      const markerItem = marker([element.location.latitude,element.location.longitude])
      .addTo(map)
      .bindPopup(`soylocker ${element.name}`)
      .openPopup();

    markerItem.on('click',  ()=> {
      this.selectedLocker= element.name
      console.log(element.name);
    });
    console.log(element.location.latitude)
    // map.fitBounds([[markerItem.getLatLng().lat, markerItem.getLatLng().lng]]);
    });

    // Ejemplo de marcador estático
    // const markerItem = marker([41.3851, 2.1734])
    //   .addTo(map)
    //   .bindPopup('soy loc')
    //   .openPopup();

    // markerItem.on('click', function () {
    //   console.log('propiedades');
    // });

  }
}
