import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../../services/services.service';


@Component({
  selector: 'app-ads-form',
  standalone: true,
  imports: [],
  templateUrl: './ads-form.component.html',
  styleUrls: ['./ads-form.component.css']
})

export class AdsFormComponent{

  propertyType = ["Casa", "Hotel", "Establecimiento"];
  propertySpace = ["Habitación", "Hall", "Trastero", "Buhardilla", "Garaje"];

  anuncioForm: FormGroup = this.formbuilder.group({
    name: new FormControl(""),
    propertyType: new FormControl(""),
    propertySpace: new FormControl(""),
    capacity: new FormControl(""),
    img: new FormControl(""),
    location: new FormControl(""),
    available: new FormControl(true),
  });
  

  constructor(private formbuilder: FormBuilder, private router: Router, private servicesService:ServicesService) { }


  async onSubmit() {
    //con el valor de localizacion (string) hare el fetch para buscar en la api de nominatim las coordenadas
    const direccion = this.anuncioForm.get('location')?.value;
    const nominatimAPI = "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=";

    try {

      //solicitud a la api
      const response = await fetch(nominatimAPI + direccion);
      const data = await response.json();

      //procesado y obtencion de coordandas en dos variables latitud y longitud
      if (data.length > 0) {
        const latitude = data[0].lat;
        const longitude = data[0].lon;

        this.anuncioForm.patchValue({
          latitude: latitude,
          longitude: longitude
        });

        this.servicesService.guardarCoordenadas({ latitude, longitude })
          .subscribe(response => {
            console.log('Coordenadas guardadas exitosamente en el servidor', response);
          });

        // Después de manejar las coordenadas, lo redirijo a la lista de anuncios
        this.router.navigate(['/anuncios']);
      } else {
        console.log("No se encontraron resultados para la dirección proporcionada.");
      }
    } catch (error) {
      console.error("Error al obtener datos de Nominatim:", error);
    }
  }
}