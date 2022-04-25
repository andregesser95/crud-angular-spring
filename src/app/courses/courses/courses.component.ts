import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category'];

  public courses: Course[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'Front-end',
    },
    {
      _id: '2',
      name: 'Java',
      category: 'Back-end',
    },
    {
      _id: '3',
      name: 'React',
      category: 'Front-end',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
