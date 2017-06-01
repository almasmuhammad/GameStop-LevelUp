import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// for dev example only, remove when API is implemented
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { LoggerService } from '../../services/logs';
import { AppService } from '../appService';

import { ApplicationProfileViewModel } from '../../models/application-profile-view-model';
import { UserProfileModel } from '../../models/user-profile-model';

@Injectable()
export class UserProfileService {

  constructor(
    private _http: Http,
    private _logger: LoggerService,
    private _appService: AppService) {}

  getProfile(): Observable<UserProfileModel> {

    // const body = JSON.stringify({ });

    // const stubProfileModel = new UserProfileModel();
    // const profile = Observable.of(stubProfileModel).delay(1000);

    // const returnProfileAsCreator = true;
    // const callApiWith401 = false;
    // const redirectToSSO = false;

    // if (returnProfileAsCreator) {
    //  stubProfileModel.roles = ['CreatorRead'];
    // }

    // if (!callApiWith401) { // remove after demo
    //  return profile;
    // }

    // if (callApiWith401) { // remove if condition after demo
      return this._http.get(
        this._appService.buildApiActionURL('Application/Profile'),
        this._appService.buildRequestOptions())
          .map((response: Response) => {
            const userProfileModel = new UserProfileModel();
            const applicationProfileViewModel = <ApplicationProfileViewModel>response.json();
            userProfileModel.languages = applicationProfileViewModel.languages;
            userProfileModel.roles = applicationProfileViewModel.roles;
            return userProfileModel;
          })
          .catch(this._appService.handleServiceError);
    // }

  }
}
