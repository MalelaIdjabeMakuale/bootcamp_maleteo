import { Component } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads-list',
  styleUrls: ['./ads-list.component.css'],
  templateUrl: './ads-list.component.html',
})
export class AdsListComponent {
  establecimientos: any[] = [];

  constructor(private servicesService: ServicesService, private router: Router) {}

  ngOnInit(): void {
    this.servicesService.getAllUsers().subscribe(establecimientos => {
      this.establecimientos = establecimientos;
    });
  }

  navigateToDetail(id: string): void {
    this.router.navigate(['anuncios', id]);
  }
}
