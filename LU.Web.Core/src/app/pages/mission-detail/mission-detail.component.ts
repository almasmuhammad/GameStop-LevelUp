import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { MissionModel } from './models';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {
  private canNavAwaySubject = new Subject<boolean>();

  @ViewChild('canNavModal') public canNavModal: ModalDirective;
  public missionId = 0;
  public model: MissionModel;

  constructor(
    private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    this.activatedRoute.params
    .map(params => this.missionId = params['id'] || 0);

    this.model = new MissionModel();
    this.model.name = 'mission 1';
    this.model.description = 'description';
    this.model.fileName = 'picfilename.png';
    this.model.allowRatings = true;
    this.model.showNotificationsOnRelease = true;

      if (this.missionId) {
        // load the mission details
        this.model.id = this.missionId;
      }
  }

  public canDeactivateHandler(): Observable<boolean> {
    this.canNavModal.show();
    return this.canNavAwaySubject;
  }

  public canNavAway(canLeave: boolean) {
    this.canNavModal.hide();
    this.canNavAwaySubject.next(canLeave);
  }

  public save() {

  }
}

