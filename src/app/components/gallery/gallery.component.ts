import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images: string[] = [
    'Home/7.jpg',
    'Home/2.jpg',
    'Home/3.jpg',
    'Home/11.jpg',
    'Home/6.JPEG',
    'Home/10.jpg'
  ];

  selectedImage: string = '';

  openModal(index: number): void {
    this.selectedImage = this.images[index];

    // Get modal element and trigger it using JavaScript
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      (modalElement as any).style.display = 'block';
      modalElement.classList.add('show');
    }
  }

  closeModal(): void {
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      (modalElement as any).style.display = 'none';
    }
  }
}
