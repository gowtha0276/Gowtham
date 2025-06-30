import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CommonService } from '../../service/common.service';


@Component({
  selector: 'app-country',
  imports: [CardComponent, CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  countries:any;
  countriesVisited = [
    { name: 'India', code: 'in' },
    { name: 'UAE', code: 'ae' },
    { name: 'Malaysia', code: 'my' },
    { name: 'Singapore', code: 'sg' },
    { name: 'Egypt', code: 'eg' },
    { name: 'Jordan', code: 'jo' },
    { name: 'Philippines', code: 'ph' },
    { name: 'Hong Kong', code: 'hk' },
    { name: 'Thailand', code: 'th' },
    { name: 'Oman', code: 'om' },
    { name: 'France', code: 'fr' },
    { name: 'Netherlands', code: 'nl' },
    { name: 'Italy', code: 'it' },
    { name: 'Switzerland', code: 'ch' },
    { name: 'Belgium', code: 'be' },
    { name: 'Germany', code: 'de' },
    { name: 'Greece', code: 'gr' },
    { name: 'Norway', code: 'no' },
    { name: 'Finland', code: 'fi' }
  ];
  
  constructor(private commonService: CommonService) {
    
  }
  
  ngOnInit(): void {
    this.countries = this.commonService.countries;
  }
}
