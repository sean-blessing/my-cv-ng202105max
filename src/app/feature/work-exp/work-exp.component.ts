import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {
  title: string = 'Work Experience';
  company: string = 'Max Train';
  position: string = 'Sr. Instructor';
  startDate: Date = new Date(2016, 8, 1);
  endDate: string = 'present';

  constructor() { }

  ngOnInit(): void {
  }

}
