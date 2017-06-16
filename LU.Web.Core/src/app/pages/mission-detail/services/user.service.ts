import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// RxJs imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Services
import { LoggerService } from '../../../shared/services/logs';
import { AppService } from '../../../shared/services/appService';

import { UserModel } from '../models';

@Injectable()
export class UserService {
  constructor(
    private _http: Http,
    private _logger: LoggerService,
    private _appService: AppService) {}

    getUsers(query: string): Observable<UserModel[]> {
      return this._http.get(
        this._appService.buildApiActionURL('MissionAudience/Users/' + query),
        this._appService.buildRequestOptions())
        .map((response: Response) => {
            return <UserModel[]>response.json();
          })
        .catch((err, caught) => this._appService.handleServiceError(err));
    }

}
