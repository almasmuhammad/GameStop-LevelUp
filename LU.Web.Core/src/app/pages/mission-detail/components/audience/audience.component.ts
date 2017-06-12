import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MissionModel } from 'app/pages/mission-detail/models';
import { TabComponent } from '../../models';

@Component({
  selector: 'app-mission-detail-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.css']
})
export class AudienceComponent extends TabComponent implements OnInit {
  @Input() model: MissionModel;

  constructor() { super(); }

  ngOnInit() {
  }
}
