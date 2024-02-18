import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  template: ''
})
export class LanguageSelectorComponent {
  constructor(private location: Location) {}

  changeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    if (lang) {
      const currentUrl = this.location.path();
      const updatedUrl = currentUrl.replace(/\/(en|es)\//, `/${lang}/`);
      this.location.go(updatedUrl);
    }
  }
}



