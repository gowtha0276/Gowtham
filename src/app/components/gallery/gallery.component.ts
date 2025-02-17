import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {
  selectedFilter = 'All';
  fileMap: { [key: string]: string[] } = {
    'India': ['5.jpg', '9.jpg', '10.jpg'],
    'Oman': ['2.jpg', '3.jpg', '7.jpg','8.jpg'],
    'Italy': ['4.jpg', '6.JPEG'],
    'Phillipines': ['1.jpg', '11.jpg']
  };
  folders: string[] = ['All'];
  images: string[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    for (let key in this.fileMap) 
      this.folders.push(key)
    this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
    const folderName = params['folder'];
    if (folderName) {
      this.selectedFilter = folderName
      this.loadImage(folderName);
    }
    else
      for (let key in this.fileMap) 
        this.loadImage(key);
    });
  }

  selectedImage: string = '';

  goBack() {
    this.router.navigate(['/']); 
  }

  loadImage(folder:any)
  {
    this.fileMap[folder].forEach(element => {
      this.images.push("Home/"+folder+"/"+element)
    });
  }

  onFilterChange(event: any) {
    const selectedFilter = event.target.value;
    console.log('Selected filter:', selectedFilter);
    this.images = [];
    if(selectedFilter == 'All')
    {
      for (let key in this.fileMap) 
        this.loadImage(key);
    }
    else
    this.loadImage(selectedFilter)
  }

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
