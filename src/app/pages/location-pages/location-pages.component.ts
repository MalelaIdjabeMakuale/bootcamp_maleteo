import { EstacionesService } from './../../services/estaciones-service.service';
import { InterfaceEstaciones } from './../../interfaces/interface-estaciones';
import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule ,FormControl, FormGroup} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import swal from 'sweetalert';






@Component({
  selector: 'app-location-pages',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './location-pages.component.html',
  styleUrl: './location-pages.component.css'
})
export class LocationPagesComponent implements OnInit {
  ngOnInit(): void {
    if(!this.authentication.isAuthenticated()){
      swal('¡No puedes acceder si no estas identificado!');
      this.router.navigate(['/registro'])
    }
  }
  
  constructor(private router:Router, private authentication:AuthenticationService){}
  profileForm = new FormGroup({
    addressForm: new FormControl(''),
    dayPutForm : new FormControl(''),
    dayOutForm : new FormControl(''),
    numObjectsForm : new FormControl()
    
  });

 
estaciones: InterfaceEstaciones[] = [];
filteredEstaciones: InterfaceEstaciones[] = [];

OnSearch(){
  localStorage.setItem("addressForm", this.profileForm.value.addressForm! )
  localStorage.setItem("dayPutForm", this.profileForm.value.dayPutForm! )
  localStorage.setItem("dayOutForm", this.profileForm.value.dayOutForm! )
  localStorage.setItem("numObjectsForm", this.profileForm.value.numObjectsForm! )
  console.log (this.profileForm.value);
  this.router.navigate(["/localizacion"])
}
  }



