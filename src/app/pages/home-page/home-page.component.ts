import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  showModal = true;
  showModal2 = false;


  ngOnInit(): void {
  }
  closeModal(id:string) {
    if (id === 'showModal' ){

      this.showModal = false;
      this.showModal2 = true;

    }else{
      this.showModal2 = false;
    }
  };
}