import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-ads-detail',
  standalone: true,
  imports: [],
  templateUrl: './ads-detail.component.html',
  styleUrl: './ads-detail.component.css'
})
export class AdsDetailComponent implements OnInit {
  establecimiento:any;

  constructor(private route: ActivatedRoute, private servicesService: ServicesService){}
  ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        const id = params.get('id');
        if(id){
          this.servicesService.getEstablecimientoById(id).subscribe(establecimiento=>{
            this.establecimiento = establecimiento;
          })
        }
      })
  }
}
