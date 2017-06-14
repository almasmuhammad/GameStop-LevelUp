import { Component, OnInit, Input } from '@angular/core';
import { MissionModel } from 'app/pages/mission-detail/models';
import { TabComponent } from '../../models';

@Component({
  selector: 'app-mission-detail-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent extends TabComponent implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
