import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

interface Country {
  name: string;
  frontImage: string;
  backImage: string;
  link: string;
}

@Component({
  selector: 'app-country',
  imports: [CardComponent, CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  countries: Country[] = [
    { name: 'Oman', frontImage: 'Home/7.jpg', backImage: 'Home/7.jpg', link: 'Oman' },
    { name: 'India', frontImage: 'Home/7.jpg', backImage: 'Home/7.jpg', link: 'India' },
    { name: 'Italy', frontImage: 'Home/7.jpg', backImage: 'Home/7.jpg', link: 'Italy' },
    { name: 'Phillipines', frontImage: 'Home/7.jpg', backImage: 'Home/7.jpg', link: 'Phillipines' }
  ];
}
