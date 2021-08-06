import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  title: string = "Education";
  college: string = "Indiana University";
  major: string = "BS Computer Information Systems";
  year: number = 1993;

  constructor() { }

  ngOnInit(): void {
  }

}
