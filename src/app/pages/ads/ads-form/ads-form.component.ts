import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-ads-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ads-form.component.html',
  styleUrls: ['./ads-form.component.css'],
})
export class AdsFormComponent {
  propertyType = ['Casa', 'Hotel', 'Establecimiento'];
  propertySpace = ['Habitación', 'Hall', 'Trastero', 'Buhardilla', 'Garaje'];

  anuncioForm: FormGroup = this.formbuilder.group({
    name: new FormControl(''),
    propertyType: new FormControl(''),
    propertySpace: new FormControl(''),
    capacity: new FormControl(''),
    img: new FormControl(''),
    available: new FormControl(true),
    longitude: new FormControl(''),
    latitude: new FormControl(''),

  });

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private servicesService: ServicesService
  ) {}

  async onSubmit() {
    if (this.anuncioForm && this.anuncioForm.valid) {

      const formValue = this.anuncioForm.value;
      console.log(formValue);
      
      

      this.servicesService.registerLocker(formValue).subscribe(
        (response) => {
       
          console.log('Register successful', response.estacion._id);
          console.log(response);
          
          
          
          // this.router.navigate(['/anuncios']);
        },
        (error) => {
          console.error('Error en el registro:', error);
          this.anuncioForm.enable();
        }
      );
    }
  }
}

//   const direccion = this.anuncioForm.get('location')?.value;
//   const direccionCodificada = encodeURIComponent(direccion);
//   const nominatimAPI = "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=";

//   try {
//     const response = await fetch(nominatimAPI + direccionCodificada);
//     const data = await response.json();
//     console.log(data);

//     if (data.length > 0) {
//       const latitude2 = data[0].lat;
//       const longitude2 = data[0].lon;

//       this.anuncioForm.patchValue({
//         latitude: latitude2,
//         longitude: longitude2
//       });

//       const formValue = this.anuncioForm.value;

//       this.servicesService.registerLocker({
//         name: formValue.name,
//         latitude: formValue.latitude,
//         longitude: formValue.longitude,
//         propertyType: formValue.propertyType,
//         propertySpace: formValue.propertySpace,
//         capacity: formValue.capacity,
//         img: formValue.img,
//         available: formValue.available,
//       }).subscribe(
//         response => {
//           console.log('Datos enviados con exito a la API', response);
//           console.log(response);

//           this.router.navigate(['/anuncios']);
//         },
//         error => {
//           console.error('Error al enviar datos a la API:', error);
//         }
//       );
//     } else {
//       console.log('Sin resultados para la dirección proporcionada');
//     }
//   } catch (error) {
//     console.error('Error al obtener datos de Nominatim', error);
//   }
