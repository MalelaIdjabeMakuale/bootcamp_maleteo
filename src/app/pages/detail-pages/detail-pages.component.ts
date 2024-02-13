import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { user } from '../../interfaces/user_interface';
import { ServicesService } from '../../services/services.service';
@Component({
  selector: 'app-detail-pages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-pages.component.html',
  styleUrls: ['./detail-pages.component.css']
})
export class DetailPagesComponent {
  id!:string | null;
  user!:user;
  constructor(private servicio:ServicesService,private rutaActivada: ActivatedRoute) {}

  ngOnInit(): void {
console.log
    this.id = localStorage.getItem('id_user');
    this.getData();
}

getData(){
  this.servicio.getUserId(this.id).subscribe((data:any) => {
    console.log(data)
    this.user = data.data;
  },
  (error: any) => {
    console.error('Error fetching user data:', error);
    }
);
}
}