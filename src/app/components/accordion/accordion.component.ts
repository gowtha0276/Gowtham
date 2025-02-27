import { Component, HostListener } from '@angular/core';
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
    'Home/7.jpg',
    'Home/2.jpg',
    'Home/3.jpg',
    'Home/11.jpg',
    'Home/10.jpg'
  ];

  ngOnInit() {
    this.updateVH();
    this.startImageRotation();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  @HostListener('window:resize')
  updateVH(): void {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  }

  startImageRotation() {
    this.interval = setInterval(() => {
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
