import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp-categories',
  templateUrl: './xp-categories.component.html',
  styleUrls: ['./xp-categories.component.css']
})
export class XpCategoriesComponent implements OnInit {

Category1:string= "Onboarding";
Category2:string= "Circle of Life";
Category3:string= "Selling and Service";
Category1Percentage:number=0.3;
Category2Percentage:number=0.44;
Category3Percentage:number=0.56;
  constructor() { }

  ngOnInit() {
  }

}
