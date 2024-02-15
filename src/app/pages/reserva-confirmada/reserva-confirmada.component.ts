import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-reserva-confirmada',
  standalone: true,
  imports: [],
  templateUrl: './reserva-confirmada.component.html',
  styleUrl: './reserva-confirmada.component.css'
})
export class ReservaConfirmadaComponent implements OnInit {
  constructor(private authentication:AuthenticationService, private router:Router){}
ngOnInit(): void {
  if(!this.authentication.isAuthenticated()){
    swal('¡No puedes acceder si no estas identificado!');
    this.router.navigate(['/registro'])
  }
}
}
