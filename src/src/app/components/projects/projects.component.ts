import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [
    NgFor
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project One',
      description: 'A brief description of project one.',
      image: 'assets/project1.png',
    },
    {
      title: 'Project Two',
      description: 'A brief description of project two.',
      image: 'assets/project2.png',
    },
  ];

  viewDetails(project: any) {
    alert(`Project Details:\n${project.title}\n${project.description}`);
  }
}