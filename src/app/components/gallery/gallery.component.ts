import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ref, listAll } from 'firebase/storage';
import { storage } from '../../firebase.init';
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
  images: string[] = [];    // your original sorted array
arrangedImages: string[] = [];   // reordered to match masonry column flow

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  async ngOnInit() {
   
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
    console.log(this.selectedFilter)
    await this.loadFileNamesFromFirebase(this.selectedFilter)
  }

  selectedImage: string = '';

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
      this.images = sortedItems.map((item: { name: any; }) => 
        `https://firebasestorage.googleapis.com/v0/b/igowtham.firebasestorage.app/o/${folderName}%2F${item.name}?alt=media&token=884b6846-aa65-4f2c-9e0b-f827245899e9`);
      this.arrangedImages = this.reorderForColumns(this.images, 3); // assuming 3 columns

      console.log(this.arrangedImages)
    } 
    catch (error) {
      console.error('Error loading images:', error);
    }
  }

  reorderForColumns(images: string[], columns: number): string[] {
    const result: string[] = [];
    const colHeights: number[][] = Array.from({ length: columns }, () => []);
  
    // Distribute images into columns
    images.forEach((image, index) => {
      colHeights[index % columns].push(index);
    });
  
    // Rebuild image array column-wise
    const maxColLength = Math.max(...colHeights.map(col => col.length));
    for (let row = 0; row < maxColLength; row++) {
      for (let col = 0; col < columns; col++) {
        const imageIndex = colHeights[col][row];
        if (imageIndex !== undefined) {
          result.push(images[imageIndex]);
        }
      }
    }
  
    return result;
  }

  loadImage(folder:any)
  {
   // this.fileMap[folder].forEach(element => {
     // this.images.push("Home/"+folder+"/"+element)
    //});
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
