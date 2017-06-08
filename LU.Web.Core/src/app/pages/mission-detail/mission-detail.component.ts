import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {
  public missionId = 0;

  constructor(private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    this.activatedRoute.params.map(params => this.missionId = params['id'] || 0);
      if (this.missionId) {
      }

      
  }
}
