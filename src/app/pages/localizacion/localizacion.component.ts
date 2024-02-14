import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { user } from '../../interfaces/user_interface';
import { RouterLink } from '@angular/router';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-localizacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './localizacion.component.html',
  styleUrl: './localizacion.component.css',
})
export class LocalizacionComponent implements OnInit {
  allusers!: any[];
  selectedLockerName: string = '';
  selectedLockerCapacity: string = '';
  selectedLockerPropertySpace: string = '';
  selectedLockerImg: string = '';
  selectedLockerAvi: string = '';
  selectedPropertyTipe: string = '';
  lat: any;
  lon: any;

  isLoading = true;


  constructor(private servicio: ServicesService) {}

  ngOnInit(): void {
    this.servicio.getAllUsers().subscribe((data: any) => {
      this.allusers = data;
      console.log('soy all', this.allusers);
      this.getLocation();

    });
  }



  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // alert(position.coords.latitude + ' ' + position.coords.longitude); // alerta de posicion
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.createMap();
      });
    }
  }

  createMap(): void {
    this.isLoading = true;

    const map = new Map('map').setView([41.3851, 2.1734], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    this.isLoading = false;

    
    const markerGeoloc = marker([
      this.lat,
      this.lon,
    ])
      .addTo(map)
      .bindPopup(`soylocker geoloc`)
      .openPopup();

    this.allusers.forEach((element) => {
      const markerItem = marker([
        element.latitude,
        element.longitude,
      ])
        .addTo(map)
        .bindPopup(`soylocker ${element.name}`)
        .openPopup();

      markerItem.on('click', () => {
        this.selectedLockerName = element.name;
        this.selectedLockerCapacity = element.capacity;
      this. selectedLockerImg = element.img;
       this.selectedLockerAvi = element.avi;
       this.selectedLockerPropertySpace = element.propertySpace;
       this.selectedPropertyTipe = element.propertyTipe;
    
       localStorage.setItem("selectedLockeId", element._id )      
      });


    });
  }
}
