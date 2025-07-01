import { Injectable } from '@angular/core';

interface Country {
    name: string;
    frontImage: string;
    backImage: string;
  }

@Injectable({
  providedIn: 'root' // Makes it a singleton across the app
})

export class CommonService {
  public countries: Country[] = [
    { name: 'Europe', frontImage: 'Home/Europe.webp', backImage: 'Home/Europe.webp' },
    { name: 'Oman', frontImage: 'Home/Oman.webp', backImage: 'Home/Oman.webp'},
    { name: 'MISC', frontImage: 'Home/Misc.webp', backImage: 'Home/Misc.webp'},
    { name: 'India', frontImage: 'Home/India.webp', backImage: 'Home/India.webp'},
    { name: 'Philippines', frontImage: 'Home/Philipine.webp', backImage: 'Home/Philipine.webp'},
    { name: 'Jordan', frontImage: 'Home/Jordan.webp', backImage: 'Home/Jordan.webp'},
    { name: 'HongKong', frontImage: 'Home/HongKong.webp', backImage: 'Home/HongKong.webp' },
    { name: 'Egypt', frontImage: 'Home/Egypt.webp', backImage: 'Home/Egypt.webp'},
    { name: 'Thailand', frontImage: 'Home/Thailand.webp', backImage: 'Home/Thailand.webp'},
    { name: 'Malaysia', frontImage: 'Home/Malaysia.webp', backImage: 'Home/Malaysia.webp'},
    { name: 'Singapore', frontImage: 'Home/Singapore.webp', backImage: 'Home/Singapore.webp'},
    { name: 'UAE', frontImage: 'Home/UAE.webp', backImage: 'Home/UAE.webp'},
  ];

  public pinned: string[] = [
    'Home/Pinned/2.webp',
    'Home/Pinned/4.webp'
   ];

  constructor() { }
}
