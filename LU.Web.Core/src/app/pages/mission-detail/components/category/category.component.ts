import { Component, OnInit, Input } from '@angular/core';
import { MissionModel } from 'app/pages/mission-detail/models';
import { TabComponent } from '../../models';

@Component({
  selector: 'app-mission-detail-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends TabComponent implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
