import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule, NgxTypewriterComponent],
  standalone: true,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})

export class AccordionComponent {
  constructor() { }

  ngOnInit(): void {
  }
  
  words: string[] = ['Being Full Stack Developer', 'An Unceasing Backpacker', 'And Nothing to tell', 'Wait Not Flexing', 'Worked in Samsung, Visa and Currently at AQR'];

  images = [
    'Home/1.JPG',
    'Home/2.jpg',
    'Home/3.JPG',
    'Home/4.jpg',
    'Home/5.JPG'
  ];
  
  hoveredImage: string | null = null;
}
