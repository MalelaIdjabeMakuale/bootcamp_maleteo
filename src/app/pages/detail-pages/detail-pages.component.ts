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
export class DetailPagesComponent {id!:any;
  user!:user;
  constructor(
   private servicio:ServicesService,
    private rutaActivada: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rutaActivada.paramMap.subscribe(params =>{
    

    this.id =Number(params.get("id"))
    


    });

    this.servicio.getUserId(this.id).subscribe((data: any) => {
      this.user = data;
    });
  }


 
}

