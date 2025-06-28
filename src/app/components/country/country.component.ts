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
    { name: 'Oman', frontImage: 'Home/Oman.png', backImage: 'Home/Oman.png', link: 'Oman' },
    { name: 'UAE', frontImage: 'Home/UAE.png', backImage: 'Home/UAE.png', link: 'India' },
    { name: 'Jordan', frontImage: 'Home/Jordan.png', backImage: 'Home/Jordan.png', link: 'Italy' },
    { name: 'Phillipines', frontImage: 'Home/Philipine.png', backImage: 'Home/Philipine.png', link: 'Phillipines' },
    { name: 'Europe', frontImage: 'Home/Europe.png', backImage: 'Home/Europe.png', link: 'Phillipines' },
    { name: 'Egypt', frontImage: 'Home/Egypt.png', backImage: 'Home/Egypt.png', link: 'Phillipines' },
    { name: 'HongKong', frontImage: 'Home/HongKong.png', backImage: 'Home/HongKong.png', link: 'Phillipines' },
    { name: 'India', frontImage: 'Home/India.png', backImage: 'Home/India.png', link: 'Phillipines' },
    { name: 'MISC', frontImage: 'Home/Misc.png', backImage: 'Home/Misc.png', link: 'Phillipines' },
    { name: 'Thailand', frontImage: 'Home/Thailand.png', backImage: 'Home/Thailand.png', link: 'Phillipines' },
  ];
}
