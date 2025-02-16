import { Component } from '@angular/core';

@Component({
  selector: 'app-workexperience',
  imports: [],
  templateUrl: './workexperience.component.html',
  styleUrl: './workexperience.component.css'
})
export class WorkexperienceComponent {
  jobs = [
    {
      title: 'Software Engineer',
      company: 'TechCorp',
      date: 'Jan 2022 - Present',
      description: 'Developed web applications using Angular and .NET.'
    },
    {
      title: 'Frontend Developer',
      company: 'WebX Solutions',
      date: 'Jun 2020 - Dec 2021',
      description: 'Worked on responsive UI and performance optimization.'
    }
  ];
}