import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-mission-percentage',
  templateUrl: './user-mission-percentage.component.html',
  styleUrls: ['./user-mission-percentage.component.css']
})
export class UserMissionPercentageComponent implements OnInit {
positionProgressPct:number=0.94;
  constructor() { }

  ngOnInit() {
  }

}
