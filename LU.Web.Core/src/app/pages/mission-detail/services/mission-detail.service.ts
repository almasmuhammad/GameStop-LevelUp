import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// RxJs imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Services
import { LoggerService } from '../../../shared/services/logs';
import { AppService } from '../../../shared/services/appService';

import { MissionModel, MissionAudienceModel } from '../models';

@Injectable()
export class MissionDetailService {

  constructor(
    private _http: Http,
    private _logger: LoggerService,
    private _appService: AppService) {}

    getMission(id: number): Observable<MissionModel> {
      const actionUrl = 'MissionCreation' + (id ? ('/' + id) : '');
      return this._http.get(
        this._appService.buildApiActionURL(actionUrl),
        this._appService.buildRequestOptions())
        .map((response: Response) => {
            return <MissionModel>response.json();
          })
        .catch((err, caught) => this._appService.handleServiceError(err));
    }

    saveMission(mission: MissionModel): Observable<number> {
      if (mission.missionId < 1) {
        mission.missionId = null;
      }
      const actionUrl = this._appService.buildApiActionURL('MissionCreation');
      return this._http.put(
        actionUrl,
        JSON.stringify(mission),
        this._appService.buildRequestOptions())
        .map((response: Response) => {
          return <number>response.json();
        })
        .catch((err, caught) => this._appService.handleServiceError(err));
    }

    getAudiences(missionId: number): Observable<MissionAudienceModel> {
      return this._http.get(
        this._appService.buildApiActionURL('MissionAudience/' + missionId),
        this._appService.buildRequestOptions())
        .map((response: Response) => {
            return <MissionAudienceModel>response.json();
          })
        .catch((err, caught) => this._appService.handleServiceError(err));
    }

    saveAudience(mission: MissionModel): Observable<void> {
      return this._http.put(
        this._appService.buildApiActionURL('Mission/' + mission.missionId + '/Audience'),
        this._appService.buildRequestOptions())
        .map((response: Response) => {
            return null;
          })
        .catch((err, caught) => this._appService.handleServiceError(err));
    }
}
