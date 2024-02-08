import { Component } from '@angular/core';
import { Continent } from '../../interfaces/inferfaces_home';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  continents: Continent[] = [
    { name: 'África' },
    { name: 'América' },
    { name: 'Asia' },
    { name: 'Europa' },
    { name: 'Oceanía' },
    { name: 'Antártida' }
  ];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}