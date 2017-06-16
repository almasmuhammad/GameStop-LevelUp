import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToasterService } from 'angular2-toaster';
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
  public isBusy = false;
  public validationErrors: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private toasterService: ToasterService,
    private missionDetailService: MissionDetailService) { }

  ngOnInit() {
  this.activatedRoute.params
    .subscribe(params => {
      const id = +params['id'] || 0;
      this.loadDetails(id);
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

      // if new mission then hold all steps until mission created
      if (this.model.missionId < 1) {
        this.missionState.detailIsBusy = true;

        this.missionDetailService.saveMission(this.model)
        .subscribe(
          (missionId: number) => {
            if (!missionId || missionId < 1) {
              this.missionState.detailSaveFailed = true;
              this.toasterService.popAsync('error', '', 'Mission creation failed.');
            }

            this.missionState.detailIsBusy = false;
            this.missionState.detailSaveFailed = false;
            this.originalModel = JSON.parse(JSON.stringify(this.model));
            this.model.missionId = missionId;
            this.toasterService.popAsync('success', '', 'Mission Created');

            this.lastTab = tab;
            tab.disabled = false;
            tab._handleClick(event);
          },
          (error) => {
            this.missionState.detailSaveFailed = true;
            this.missionState.detailIsBusy = false;
            this.toasterService.popAsync('error', '', 'Mission creation failed.');
          });
      } else {
            this.lastTab = tab;
          tab._handleClick(event);
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

  protected saveDetails(this_: MissionDetailComponent): string[] {

    const errors = MissionValidation.getDetailValidationFailures(this_.model);
    if (errors && errors.length > 0) {
      return errors;
    }

// TODO abstract
    if (this_.model.missionId > 0) {
      if (!MissionValidation.isMissionDetailDirty(this_.model, this_.originalModel)) {
        return null;
      }

    this_.missionState.detailIsBusy = true;

    this_.missionDetailService.saveMission(this_.model)
        .subscribe(
          (missionId: number) => {
            this_.missionState.detailSaveFailed = false;
            this_.missionState.detailIsBusy = false;
            this_.originalModel = JSON.parse(JSON.stringify(this_.model));
            this_.toasterService.popAsync('success', '', 'Mission saved.');
          },
          (error) => {
            this_.missionState.detailSaveFailed = true;
            this_.missionState.detailIsBusy = false;
            if (error && error.status && error.status === 404) {
              this_.toasterService.popAsync('error', '', 'Mission does not exist.');
            } else {
              this_.toasterService.popAsync('error', '', 'Mission save failed.');
            }
          });
    }
    return null;
  }
  protected saveAudience(this_: MissionDetailComponent): string[] {
    const errors = MissionValidation.getAudienceValidationFailures(this_.model);
    if (errors && errors.length > 0) {
      return errors;
    }

    if (MissionValidation.isAudienceDirty(this_.model, this_.originalModel)) {
     //  return null;
    }

    this_.missionState.audienceIsBusy = true;

    this_.missionDetailService.saveAudience(this_.model)
    .subscribe(
          () => {
            this_.missionState.audienceSaveFailed = false;
            this_.missionState.audienceIsBusy = false;
            this_.toasterService.popAsync('success', '', 'Audience saved.');
          },
          (error) => {
            this_.missionState.audienceSaveFailed = true;
            this_.missionState.audienceIsBusy = false;
            if (error && error.status && error.status === 404) {
              this_.toasterService.popAsync('error', '', 'Mission does not exist.');
            } else {
              this_.toasterService.popAsync('error', '', 'Audience save failed.');
            }
          });

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
      this.isBusy = true;
      this.missionDetailService.getMission(id)
      .subscribe((mission) => {
        this.isBusy = false;
        if (!mission) {
          this.createEmptyMission();
          this.toasterService.popAsync('error', '', 'Mission does not exist.');
        } else {
        this.model = mission;
        this.originalModel = mission;
        }
      },
      (error) => {
        this.isBusy = false;
        this.createEmptyMission();
        this.toasterService.popAsync('error', '', 'Mission retrieval failed.');
      });
    } else {
      this.createEmptyMission();
    }
  }

  private createEmptyMission(): void {
      this.model = new MissionModel();
      this.model.missionId = 0;
      this.model.missionName = '';
      this.model.description = '';
      this.model.badgeImagePath = 'defaultBadge.png';
  }
}

