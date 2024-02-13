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
    numObjectsForm : new FormControl('')
    
  });

 

  OnSearch(){
    console.warn(this.profileForm.value);
  
  }

 
}

