import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
    private showBookingsValue: boolean = false;
  
    get showBookings(): boolean {
      return this.showBookingsValue;
    }
  
    setShowBookings(value: boolean) {
      this.showBookingsValue = value;
    }
  }
