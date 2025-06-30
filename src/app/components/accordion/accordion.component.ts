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
  imagesFull = [
    'Home/1.webp',
    'Home/4.webp',
    'Home/2.webp',
    'Home/Misc.webp',
    'Home/5.webp'
  ];
  
  images: string[] = [];
  

  ngOnInit() {
    this.updateVH();
    this.setImagesBasedOnScreenSize();
    this.startImageRotation();
  }


setImagesBasedOnScreenSize() {
  const screenWidth = window.innerWidth;
  this.images = screenWidth <= 768 ? this.imagesFull.slice(0, 4) : [...this.imagesFull];
  console.log(this.images)
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

  words: string[] = ['Being Full Stack Developer', 'An Unceasing Backpacker', 'Worked in Samsung, Visa and Currently at AQR','Masochism','And Nothing to tell'];

 
  
  
}
