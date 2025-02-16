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
  activeIndex = 0;
  interval: any;
  hoveredImage: string | null = null;

  images = [
    'Home/1.JPG',
    'Home/2.jpg',
    'Home/3.JPG',
    'Home/4.jpg',
    'Home/5.JPG'
  ];

  ngOnInit() {
    console.log(this.hoveredImage);
    this.startImageRotation();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startImageRotation() {
    this.interval = setInterval(() => {
      console.log(this.getActiveImage());
      const currentIndex = this.images.indexOf(this.getActiveImage());
      const nextIndex = (currentIndex + 1) % this.images.length;
      this.hoveredImage = this.images[nextIndex];
    }, 3000); 
  }

  setActiveImage(index: number) {
    this.activeIndex = index;
    this.hoveredImage = this.images[this.activeIndex];
    this.getActiveImage();
  }
  
  getActiveImage() {
    return this.hoveredImage ?? this.images[0]; // Default to images[2]
  }

  getActive(index: number){
    const currentIndex = this.images.indexOf(this.getActiveImage());
    if(index == currentIndex) return true;
    return false;
  }

  words: string[] = ['Being Full Stack Developer', 'An Unceasing Backpacker', 'And Nothing to tell', 'Wait Not Flexing', 'Worked in Samsung, Visa and Currently at AQR'];

 
  
  
}
