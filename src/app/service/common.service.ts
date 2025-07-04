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
    'Home/Pinned/105.webp',
    'Home/Pinned/115.webp',
    'Home/Pinned/120.webp',
    'Home/Pinned/125.webp',
    'Home/Pinned/130.webp',
    'Home/Pinned/135.webp',
    'Home/Pinned/138.webp',
    'Home/Pinned/140.webp',
    'Home/Pinned/145.webp',
    'Home/Pinned/150.webp',
    'Home/Pinned/155.webp',
    'Home/Pinned/160.webp',
    'Home/Pinned/165.webp',
    'Home/Pinned/170.webp',
    'Home/Pinned/175.webp',
    'Home/Pinned/180.webp',
    'Home/Pinned/185.webp',
    'Home/Pinned/190.webp',
    'Home/Pinned/195.webp',
    'Home/Pinned/200.webp',
    'Home/Pinned/205.webp',
    'Home/Pinned/210.webp',
    'Home/Pinned/215.webp',
    'Home/Pinned/220.webp',
    'Home/Pinned/225.webp',
    'Home/Pinned/230.webp',
    'Home/Pinned/235.webp',
    'Home/Pinned/240.webp',
    'Home/Pinned/245.webp',
    'Home/Pinned/250.webp',
    'Home/Pinned/255.webp',
    'Home/Pinned/260.webp',
    'Home/Pinned/265.webp',
    'Home/Pinned/270.webp',
    'Home/Pinned/280.webp',
    'Home/Pinned/285.webp',
    'Home/Pinned/290.webp',
    'Home/Pinned/295.webp'
  ];
  

  constructor() { }
}
