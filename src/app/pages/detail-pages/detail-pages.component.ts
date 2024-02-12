import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { interUsers } from '../../interfaces/interfaces_users';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-pages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-pages.component.html',
  styleUrls: ['./detail-pages.component.css']
})
export class DetailPagesComponent {
 
}

