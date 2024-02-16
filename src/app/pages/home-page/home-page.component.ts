import { CommonModule } from '@angular/common';
import { Continent } from '../../interfaces/inferfaces_home';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  continents: Continent[] = [
    { name: 'África' },
    { name: 'América' },
    { name: 'Asia' },
    { name: 'Europa' },
    { name: 'Oceanía' },
    { name: 'Antártida' }
  ];

  constructor(private location: Location) {}

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }

  selectContinent(selectedContinent: string): void {
    console.log(selectedContinent); 
  }

}