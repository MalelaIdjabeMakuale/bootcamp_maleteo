import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads-form',
  standalone: true,
  imports: [],
  templateUrl: './ads-form.component.html',
  styleUrl: './ads-form.component.css'
})

export class AdsFormComponent implements OnInit {

  tipoPropiedad = ["Casa", "Hotel", "Establecimiento"];
  tipoEstablecimiento = ["Habitación", "Hall", "Trastero", "Buhardilla", "Garaje"];

  anuncioForm: FormGroup = this.formbuilder.group({
    titulo: new FormControl(""),
    tipoPropiedad: new FormControl(""),
    tipoEspacio: new FormControl(""),
    direccion: new FormControl(""),
    disponible: new FormControl(true),
  });


  constructor(private formbuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {}

  onSubmit() {
      this.router.navigate(['/anuncios']);
  }
  
}
