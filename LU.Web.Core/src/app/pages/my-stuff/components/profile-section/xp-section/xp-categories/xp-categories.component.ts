import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp-categories',
  templateUrl: './xp-categories.component.html',
  styleUrls: ['./xp-categories.component.css']
})
export class XpCategoriesComponent implements OnInit {

Category1 = 'Onboarding';
Category2 = 'Circle of Life';
Category3 = 'Selling and Service';
Category1Percentage = 0.3;
Category2Percentage = 0.44;
Category3Percentage = 0.56;
  constructor() { }

  ngOnInit() {
  }

}
