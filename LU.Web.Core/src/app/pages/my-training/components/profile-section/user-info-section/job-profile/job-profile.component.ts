import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {

  jobtitle = 'Store Leader';
  shift = 'Hourly';

  constructor() { }

  ngOnInit() {
  }

}
