import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../../services/services.service';
import swal from 'sweetalert';
import { AuthenticationService } from '../../../services/authentication.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-ads-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ads-form.component.html',
  styleUrls: ['./ads-form.component.css'],
})
export class AdsFormComponent implements OnInit{
  propertyType = ['Casa', 'Hotel', 'Establecimiento'];
  propertySpace = ['Habitación', 'Hall', 'Trastero', 'Buhardilla', 'Garaje'];
  selectedFile: File | null = null;

  anuncioForm: FormGroup = this.formbuilder.group({
    name: new FormControl(''),
    propertyType: new FormControl(''),
    propertySpace: new FormControl(''),
    capacity: new FormControl(''),
    img: new FormControl(''),
    aviable: new FormControl(true),
    longitude: new FormControl(''),
    latitude: new FormControl(''),

  });

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private servicesService: ServicesService,
    private authentication: AuthenticationService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if(!this.authentication.isAuthenticated()){
      swal('¡No puedes acceder si no estas identificado!');
      this.router.navigate(['/registro'])
    }
  }

  async onSubmit() {
    if (this.anuncioForm && this.anuncioForm.valid) {
      const formValue = this.anuncioForm.value;
      console.log(formValue);

      this.servicesService.registerLocker(formValue).subscribe(
        (response) => {
          console.log('Register successful', response.estacion._id);

          console.log(response);

          const userId = localStorage.getItem('id_user'); //aqui tengo que meter la logica para sacar el id del user
          const locker = response.estacion._id;
          const lockerUpdate = {estaciones:locker._id}
          console.log("soy de el antes update id locker ",locker._id)
          this.servicesService.updateUser(userId,lockerUpdate).subscribe(
            (response) => {
              console.log("soy la response",response)
              console.log("soy de el update",userId)

              console.log('Usuario actualizado con la estacion');
            },
            (error) => {
              console.error('Error al actualizar el usuario', error);
            }
          );

          // this.router.navigate(['/anuncios']);
        },
        (error) => {
          console.error('Error en el registro:', error);
          this.anuncioForm.enable();
        }
      );
    }
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<any>('http://api-plum-six.vercel.app/api/upload', formData).subscribe(
      (response:any) => {
        console.log('Imagen subida con éxito:', response.imageUrl);
        // Actualizar el formulario con la URL de la imagen
        this.anuncioForm.patchValue({
          img: response.imageUrl
        });
      },
      (error:any) => {
        console.error('Error al subir la imagen:', error);
      }
    );
  }
}
