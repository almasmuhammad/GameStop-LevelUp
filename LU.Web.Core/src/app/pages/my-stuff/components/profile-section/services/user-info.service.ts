import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// RxJs imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Services
import { LoggerService } from '../../../../../shared/services/logs';
import { AppService } from './../../../../../shared/services/appService';

// Models
import { UserInformationViewModel } from '../models';

@Injectable()
export class UserInfoService {

  constructor(
    private _http: Http,
    private _logger: LoggerService,
    private _appService: AppService) {}

    public getUserInfo(): Observable<UserInformationViewModel> {
      return this._http.get(
        this._appService.buildApiActionURL('User/UserInfo'),
        this._appService.buildRequestOptions())
        .map((response: Response) => {
            return <UserInformationViewModel>response.json();
          })
          .catch(this._appService.handleServiceError);
    }
}
