import { EstacionesService } from './../../services/estaciones-service.service';
import { InterfaceEstaciones } from './../../interfaces/interface-estaciones';
import { Component } from '@angular/core';
import {ReactiveFormsModule ,FormControl, FormGroup} from '@angular/forms';
import { RouterLink } from '@angular/router';






@Component({
  selector: 'app-location-pages',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './location-pages.component.html',
  styleUrl: './location-pages.component.css'
})
export class LocationPagesComponent {

  

  profileForm = new FormGroup({
    addressForm: new FormControl(''),
    dayPutForm : new FormControl(''),
    dayOutForm : new FormControl(''),
    numObjectsForm : new FormControl()
    
  });

 
estaciones: InterfaceEstaciones[] = [];
filteredEstaciones: InterfaceEstaciones[] = [];

constructor(private servicio:EstacionesService) {}
OnSearch() {
  const numObjectsControl = this.profileForm.get('numObjectsForm');
  if (numObjectsControl) {
    const numObjects = numObjectsControl.value;
    this.servicio.getAllEstaciones().subscribe(estaciones => {
      this.estaciones = estaciones;
      this.filteredEstaciones = this.estaciones.filter(estacion => estacion.capacity >= numObjects);
      console.warn(this.filteredEstaciones);
    });
  }
}
}



