import { Component } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { CountryComponent } from '../country/country.component';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { WorkexperienceComponent } from '../workexperience/workexperience.component';

@Component({
  selector: 'app-home',
  imports: [AccordionComponent,HeaderComponent, WorkexperienceComponent, CountryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
