import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp-level',
  templateUrl: './xp-level.component.html',
  styleUrls: ['./xp-level.component.css']
})
export class XpLevelComponent implements OnInit {

levelNumber = 17;
currentXp = 55238;

  constructor() { }

  ngOnInit() {
  }

}
