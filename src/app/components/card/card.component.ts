import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit, OnDestroy {
  @Input() countryName!: string;
  @Input() frontImage!: string;
  @Input() backImage!: string;
  @Input() link!: string;

  isFlipped = false;
  private flipInterval: any;

  constructor(private router: Router, private commonService: CommonService) {}

  ngOnInit() {
    this.flipInterval = setInterval(() => {
      this.isFlipped = !this.isFlipped;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.flipInterval) {
      clearInterval(this.flipInterval);
    }
  }

  viewByGallery(){
    this.router.navigate(['/gallery'],{ queryParams: { filter: this.countryName } });
  }
}
