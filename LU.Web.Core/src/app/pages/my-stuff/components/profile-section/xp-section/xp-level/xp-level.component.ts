import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp-level',
  templateUrl: './xp-level.component.html',
  styleUrls: ['./xp-level.component.css']
})
export class XpLevelComponent implements OnInit {

levelNumber:number=17;
currentXp:number=55238;
levelupXp:number=60000;

  constructor() { }

  ngOnInit() {
  }

}
