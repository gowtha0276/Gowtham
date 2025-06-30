import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
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
  galleryOptions: string[] = ['Pinned', 'All'];
  images: string[] = [];
  selectedImage = '';
  imageLoading: boolean[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) {}

  async ngOnInit(): Promise<void> {
    const queryFilter = this.route.snapshot.queryParamMap.get('filter');
    this.commonService.countries.forEach(country => this.galleryOptions.push(country.name));
    this.selectedFilter = queryFilter || 'Pinned';
    this.updateQueryParams(this.selectedFilter)
    await this.loadFileNamesFromFirebase(this.selectedFilter);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  async loadFileNamesFromFirebase(folderName: string): Promise<void> {
    const folderRef = ref(storage, folderName);

    try {
      const res = await listAll(folderRef);

      const sortedItems = res.items.sort((a: { name: string; }, b: { name: any; }) =>
        a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
      );

      const urls = await Promise.all(sortedItems.map((item: any) => getDownloadURL(item)));
      this.images = this.reorderForMasonryLeftToRight(urls, 2);
      this.imageLoading = new Array(this.images.length).fill(true);
    } catch (error) {
      console.error('Error loading images:', error);
    }
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
    const selectedFilter = (event.target as HTMLSelectElement).value;
    this.selectedFilter = selectedFilter;
    this.updateQueryParams(selectedFilter);
    await this.loadFileNamesFromFirebase(selectedFilter);
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
