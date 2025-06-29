import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ref, listAll } from 'firebase/storage';
import { storage } from '../../firebase.init';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {
  selectedFilter = '';
  galleryOptions: string[] = ['Pinned','All'];
  images: string[] = [];
  selectedImage: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private commonService:CommonService) {}

  async ngOnInit() {
    this.commonService.countries.forEach(a => this.galleryOptions.push(a.name));
    this.selectedFilter = this.commonService.getGalleryFilter();
    await this.loadFileNamesFromFirebase(this.selectedFilter)
  }

  goBack() {
    this.router.navigate(['/']); 
  }

  async loadFileNamesFromFirebase(folderName : any) {
    const folderRef = ref(storage, folderName);

    try {
      const res = await listAll(folderRef);

      // Sort items by name
      const sortedItems = res.items.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));

      // Get download URLs
      var urls = sortedItems.map((item: { name: any; }) => 
        `https://firebasestorage.googleapis.com/v0/b/igowtham.firebasestorage.app/o/${folderName}%2F${item.name}?alt=media&token=884b6846-aa65-4f2c-9e0b-f827245899e9`);

      this.images = this.reorderForMasonryLeftToRight(urls, 2)
    } 
    catch (error) {
      console.error('Error loading images:', error);
    }
  }

  reorderForMasonryLeftToRight<T>(input: T[], columns: number): T[] {
    const columnArrays: T[][] = Array.from({ length: columns }, () => []);
  
    // Distribute elements across columns in round-robin (left to right)
    input.forEach((item, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push(item);
    });
  
    // Flatten column-wise (stacked vertically per column, keeping left-to-right order)
    return columnArrays.flat();
  }

  async onFilterChange(event: any) {
    const selectedFilter = event.target.value;
    await this.loadFileNamesFromFirebase(this.selectedFilter)
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
