import { Component, OnInit, NgZone } from '@angular/core';
import Pusher from 'pusher-js';
import { HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule,FormControl,FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';



@Component({
  selector: 'app-chat2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule,],
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit {
  username: string = 'username';
  message: string = '';
  messages: { username: string, message: string }[] = [];

  constructor(private http: HttpClient, private ngZone: NgZone, private authentication:AuthenticationService, private router:Router) { }
  
  



  ngOnInit(): void {
    if(!this.authentication.isAuthenticated()){
      swal('¡No puedes acceder si no estas identificado!');
      this.router.navigate(['/registro'])
    }
    console.log(this.message);
    Pusher.logToConsole = true;

    const pusher = new Pusher('9e5227b9c4e79c8891ed', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: { username: string, message: string }) => {
      this.ngZone.run(() => {
        this.messages.push(data);
      });
    });
  }

  submit(): void {
    this.http.post('https://api-plum-six.vercel.app/api/messages', {
      username: this.username,
      message: this.message
    }).subscribe(
      () => this.message = '',
      (error: any) => console.error('Error submitting message:', error)
    );
  }
}