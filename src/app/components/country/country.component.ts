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

  constructor(private commonService: CommonService) {
    
  }
  
  ngOnInit(): void {
    this.countries = this.commonService.countries;
  }
}
