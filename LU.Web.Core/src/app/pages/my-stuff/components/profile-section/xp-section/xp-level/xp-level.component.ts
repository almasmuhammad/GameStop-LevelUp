import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp-level',
  templateUrl: './xp-level.component.html',
  styleUrls: ['./xp-level.component.css']
})
export class XpLevelComponent implements OnInit {
  
levelNumber:number=7;
currentXp:number=55;
levelupXp:number=100;

  constructor() { }

  ngOnInit() {
  }

}
