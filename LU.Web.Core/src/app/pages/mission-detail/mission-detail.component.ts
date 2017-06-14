import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AccordionComponent, AccordionTabComponent } from '../../shared';

import {
  MissionModel,
  TabComponent,
  MissionStateModel,
  MissionValidation  } from './models';

import { MissionDetailService } from './services';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MissionDetailComponent implements OnInit {
  private canNavAwaySubject = new Subject<boolean>();
  private lastTab: AccordionTabComponent;
  private originalModel: MissionModel;

  @ViewChild('canNavModal') public canNavModal: ModalDirective;
  @ViewChild('validationModal') public validationModal: ModalDirective;

  public model: MissionModel;
  public missionState = new MissionStateModel();
  public isBusy = true;
  public validationErrors: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private missionDetailService: MissionDetailService) { }

  ngOnInit() {
  this.activatedRoute.params
    .subscribe(params => {
      const id = +params['id'] || 0;
      this.loadDetails(id);
      this.isBusy = false;
    });
  }

  public changeLinkedTab(
    tab: AccordionTabComponent,
    persistor: (_thisParm: MissionDetailComponent) => string[],
    _thisComponent: MissionDetailComponent): void {
    const event = new Event('tabClick');

    if (tab) {
      const errors = persistor(_thisComponent);
      if (errors && errors.length > 0) {
        _thisComponent.validationErrors = errors;
        _thisComponent.validationModal.show();
        return;
      }

      // if new then hold all until mission created
      if (this.model.missionId < 1) {
        this.missionState.detailIsBusy = true;

        this.missionDetailService.saveMission(this.model)
        .subscribe(
          (missionId: number) => {
            if (!missionId || missionId < 1) {
              this.missionState.detailSaveFailed = true;
              // fire alert
            }

            this.missionState.detailSaveFailed = false;
            this.originalModel = this.model;
            this.model.missionId = missionId;

            // fire alert

            tab._handleClick(event);
            this.lastTab = tab;
          },
          (error) => {
            this.missionState.detailSaveFailed = true;
            // fire alert
          },
          () => { this.missionState.detailIsBusy = false; });
      } else {
          tab._handleClick(event);
          this.lastTab = tab;
      }
    }
  }

  // called by navigation for CanDeactive
  public canDeactivateHandler(): Observable<boolean> {
    this.canNavModal.show();
    return this.canNavAwaySubject;
  }

  // used by canDeactiveHandler Nav Guard and
  // modal confirmation when navigating away from mission details
  public canNavAway(canLeave: boolean): void {
    this.canNavModal.hide();
    this.canNavAwaySubject.next(canLeave);
  }

  public saveAndAddContent(): void {
    let errors: string[] = [];

    let stepErrors = MissionValidation.getDetailValidationFailures(this.model);
    if (stepErrors && stepErrors.length > 0) {
      errors.push('translate mission details errors: ');
      errors = errors.concat(stepErrors);
      stepErrors = null;
    }

    stepErrors = MissionValidation.getAudienceValidationFailures(this.model);
    if (stepErrors && stepErrors.length > 0) {
      errors.push('translate audience errors: ');
      errors = errors.concat(stepErrors);
      stepErrors = null;
    }

    stepErrors = MissionValidation.getCategoryValidationFailures(this.model);
    if (stepErrors && stepErrors.length > 0) {
      errors.push('translate category errors: ');
      errors = errors.concat(stepErrors);
      stepErrors = null;
    }

    stepErrors = MissionValidation.getPrereqValidationFailures(this.model);
    if (stepErrors && stepErrors.length > 0) {
      errors.push('translate prereq errors: ');
      errors = errors.concat(stepErrors);
      stepErrors = null;
    }

    stepErrors = MissionValidation.getPublishValidationErrors(this.model);
    if (stepErrors && stepErrors.length > 0) {
      errors.push('translate publication errors: ');
      errors = errors.concat(stepErrors);
      stepErrors = null;
    }

    if (errors && errors.length > 0) {
      this.validationErrors = errors;
      this.validationModal.show();
      return;
    }

    // route if save completes
  }

  protected saveDetails(_this: MissionDetailComponent): string[] {
    const errors = MissionValidation.getDetailValidationFailures(_this.model);
    if (errors && errors.length > 0) {
      return errors;
    }

    if (_this.model.missionId < 1) {
      return null;
    }

    _this.missionState.detailIsBusy = true;
    // call service
    // show alert for good or bad return

    return null;
  }
  protected saveAudience(_this: MissionDetailComponent): string[] {
    const errors = MissionValidation.getAudienceValidationFailures(_this.model);
    if (errors && errors.length > 0) {
      return errors;
    }

    // persist
    return null;
  }
  protected saveCategory(_this: MissionDetailComponent): string[] {
    const errors = MissionValidation.getCategoryValidationFailures(_this.model);
    if (errors && errors.length > 0) {
      return errors;
    }

    // persist
    return null;
  }
  protected savePrereq(_this: MissionDetailComponent): string[] {
    const errors = MissionValidation.getPrereqValidationFailures(_this.model);
    if (errors && errors.length > 0) {
      return errors;
    }

    // persist
    return null;
  }

  private loadDetails(id: number): void {
    if (id > 0) {
      // load from service
      this.model = new MissionModel();
      this.model.missionId = id;
      this.model.missionName = 'Mission ' + id;
      this.model.description = 'detailed mission description';
      this.model.badgeImagePath = 'something.png';
    } else {
      this.model = new MissionModel();
      this.model.missionId = 0;
      this.model.missionName = '';
      this.model.description = '';
      this.model.badgeImagePath = 'defaultBadge.png';
    }
  }
}

