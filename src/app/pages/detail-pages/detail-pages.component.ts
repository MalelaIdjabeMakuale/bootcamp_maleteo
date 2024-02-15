import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { user } from '../../interfaces/user_interface';
import { ServicesService } from '../../services/services.service';
import { SharedService } from '../../services/shared.service';
import { AuthenticationService } from '../../services/authentication.service';
import swal from 'sweetalert';

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
  constructor(private router:Router, private authentication:AuthenticationService, private servicio:ServicesService,private rutaActivada: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit(): void {
console.log
    this.id = localStorage.getItem('id_user');
    this.getData();

      if(!this.authentication.isAuthenticated()){
        swal('¡No puedes acceder si no estas identificado!');
        this.router.navigate(['/registro'])
      }
    
}
logOut():void{
  localStorage.removeItem('token');
  this.router.navigate(['registro'])
}

getData(){
  this.servicio.getUserId(this.id).subscribe((data:any) => {
    console.log("esto es el data del user: ",data.data)
    this.user = data.data;
    if(this.user.estaciones.bookings !==null || this.user.estaciones.bookings!==""){
      this.sharedService.setShowBookings(true);
    }
  },
  (error: any) => {
    console.error('Error fetching user data:', error);
    }
);
}
}