import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase.init';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {
  selectedFilter = '';
  galleryOptions: string[] = ['Pinned'];
  images: string[] = [];
  selectedImage = '';
  imageLoading: boolean[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) {}

  async ngOnInit(): Promise<void> {
    this.commonService.countries.forEach(country => this.galleryOptions.push(country.name));
    this.galleryOptions.push('All')
    this.selectedFilter = this.route.snapshot.queryParamMap.get('filter') || 'Pinned';
    this.loadFilter();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  async loadFilter(){
    this.updateQueryParams(this.selectedFilter);
    if(this.selectedFilter == "Pinned")
      this.getPinnedFiles();
    else if(this.selectedFilter == "All")
      await this.getAllFilesInStorage();
    else
      await this.getFilesForSelectedFolder(this.selectedFilter);
  }

  async getUrlsFromFolder(folder:any){
    const folderRef = ref(storage, folder);
    const res = await listAll(folderRef);
    const sortedItems = res.items.sort((a: { name: string; }, b: { name: any; }) =>
      a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
    const urls = await Promise.all(sortedItems.map((item: any) => getDownloadURL(item)));
    return urls;
  }

  async getFilesForSelectedFolder(folderName: string): Promise<void> {
    const urls = await this.getUrlsFromFolder(folderName);
    this.images = this.reorderForMasonryLeftToRight(urls, 2);
    this.imageLoading = new Array(this.images.length).fill(true);
  }

  async getAllFilesInStorage() {
    const allImages: any[] = [];
    for (const country of this.commonService.countries) {
      if (country.name !== "All" && country.name !== "Pinned") {
        const urls = await this.getUrlsFromFolder(country.name);
        allImages.push(...urls);
      }
    }
    this.images = allImages;
    this.imageLoading = new Array(this.images.length).fill(true);
  }

  getPinnedFiles(){
    const urls = this.commonService.pinned;
    this.images = this.reorderForMasonryLeftToRight(urls, 2);
    this.imageLoading = new Array(this.images.length).fill(true);
  }
  
  reorderForMasonryLeftToRight<T>(input: T[], columns: number): T[] {
    const columnArrays: T[][] = Array.from({ length: columns }, () => []);
    input.forEach((item, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push(item);
    });
    return columnArrays.flat();
  }

  async onFilterChange(event: Event): Promise<void> {
    this.selectedFilter = (event.target as HTMLSelectElement).value;
    this.loadFilter();
  }

  updateQueryParams(filter:any)
  {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { filter: filter },
      queryParamsHandling: 'merge'
    });
  }

  openModal(index: number): void {
    this.selectedImage = this.images[index];

    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      modalElement.style.display = 'block';
      modalElement.classList.add('show');
    }
  }

  closeModal(): void {
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
    }
  }

  imageLoad(index: number): void {
    this.imageLoading[index] = false;
  }
}
