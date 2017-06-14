import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// RxJs imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Services
import { LoggerService } from '../../../shared/services/logs';
import { AppService } from './../../../shared/services/appService';

import { MissionModel } from '../models';

@Injectable()
export class MissionDetailService {

  constructor(
    private _http: Http,
    private _logger: LoggerService,
    private _appService: AppService) {}

    getMission(id: number): Observable<MissionModel> {
      const actionUrl = 'MissionCreation' + (id ? '/id' : '');
      return this._http.get(
        this._appService.buildApiActionURL(actionUrl),
        this._appService.buildRequestOptions())
        .map((response: Response) => {
            return <MissionModel>response.json();
          })
          .catch(this._appService.handleServiceError);
    }

    saveMission(mission: MissionModel): Observable<number> {
      const actionUrl = 'MissionCreation';
      return this._http.put(
        this._appService.buildApiActionURL(actionUrl),
        JSON.stringify(mission),
        this._appService.buildRequestOptions())
        .map((response: Response) => {
          return <number>response.json();
        });
    }
}
