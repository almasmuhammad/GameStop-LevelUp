import { Component, OnInit, Input } from '@angular/core';
import { MissionModel } from 'app/pages/mission-detail/models';
import { TabComponent } from '../../models';

@Component({
  selector: 'app-mission-detail-prereq',
  templateUrl: './prereq.component.html',
  styleUrls: ['./prereq.component.css']
})
export class PrereqComponent extends TabComponent implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
