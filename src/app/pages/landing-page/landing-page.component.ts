
import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit { showModal = false;
  showModal2 = false;

  constructor(private titleService:Title) {
    this.titleService.setTitle($localize`${ this.title}`);
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.showModal = true;
    }, 2000);
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
