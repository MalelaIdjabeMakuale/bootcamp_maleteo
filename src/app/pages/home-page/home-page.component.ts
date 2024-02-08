import { CommonModule } from '@angular/common';
import { Continent } from '../../interfaces/inferfaces_home';
import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,],
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