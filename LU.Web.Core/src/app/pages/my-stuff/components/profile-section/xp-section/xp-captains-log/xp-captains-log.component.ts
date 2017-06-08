import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp-captains-log',
  templateUrl: './xp-captains-log.component.html',
  styleUrls: ['./xp-captains-log.component.css']
})
export class XpCaptainsLogComponent implements OnInit {

  captainsLog = 'Captains Log data will go in this section';

  constructor() { }

  ngOnInit() {
  }

}
