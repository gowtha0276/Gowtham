import { Injectable } from '@angular/core';

interface Country {
    name: string;
    frontImage: string;
    backImage: string;
    link: string;
  }

@Injectable({
  providedIn: 'root' // Makes it a singleton across the app
})
export class CommonService {
  public galleryFilter: string = 'Oman';
  public countries: Country[] = [
    { name: 'Oman', frontImage: 'Home/Oman.png', backImage: 'Home/Oman.webp', link: 'Oman' },
    { name: 'UAE', frontImage: 'Home/UAE.png', backImage: 'Home/UAE.webp', link: 'India' },
    { name: 'Jordan', frontImage: 'Home/Jordan.png', backImage: 'Home/Jordan.webp', link: 'Italy' },
    { name: 'Phillipines', frontImage: 'Home/Philipine.png', backImage: 'Home/Philipine.webp', link: 'Phillipines' },
    { name: 'Europe', frontImage: 'Home/Europe.png', backImage: 'Home/Europe.webp', link: 'Phillipines' },
    { name: 'Egypt', frontImage: 'Home/Egypt.png', backImage: 'Home/Egypt.webp', link: 'Phillipines' },
    { name: 'HongKong', frontImage: 'Home/HongKong.png', backImage: 'Home/HongKong.webp', link: 'Phillipines' },
    { name: 'India', frontImage: 'Home/India.png', backImage: 'Home/India.webp', link: 'Phillipines' },
    { name: 'MISC', frontImage: 'Home/Misc.png', backImage: 'Home/Misc.webp', link: 'Phillipines' },
    { name: 'Thailand', frontImage: 'Home/Thailand.png', backImage: 'Home/Thailand.webp', link: 'Phillipines' },
  ];

  constructor() { }

  setGalleryFilter(newMsg: string) {
    this.galleryFilter = newMsg;
  }

  getGalleryFilter(): string {
    return this.galleryFilter;
  }
}
