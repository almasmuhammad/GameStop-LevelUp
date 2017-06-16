import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// RxJs imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Services
import { LoggerService } from '../../../shared/services/logs';
import { AppService } from '../../../shared/services/appService';

import { GroupModel } from '../models';

@Injectable()
export class UserGroupService {
  constructor(
    private _http: Http,
    private _logger: LoggerService,
    private _appService: AppService) {}

    getGroups(): Observable<GroupModel[]> {
      return this._http.get(
        this._appService.buildApiActionURL('MissionAudience/Groups/'),
        this._appService.buildRequestOptions())
        .map((response: Response) => {
            return <GroupModel[]>response.json();
          })
        .catch((err, caught) => this._appService.handleServiceError(err));
    }

}
