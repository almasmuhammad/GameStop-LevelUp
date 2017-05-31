import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {

  jobtitle:string="Store Leader";
  shift:string="Hourly";

  constructor() { }

  ngOnInit() {
  }

}
