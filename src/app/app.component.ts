import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HeaderComponent } from './components/header/header.component';
import { Router } from '@angular/router';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccordionComponent,HeaderComponent, WorkexperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
  isHomePage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/';
    });
  }
}
