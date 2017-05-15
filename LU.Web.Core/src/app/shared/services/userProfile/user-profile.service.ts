import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// for dev example only, remove when API is implemented
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { environment } from '../../../../environments/environment';
import { ProfileModel } from '../../models/profile-model';
import { WindowService } from '../window/window.service';

@Injectable()
export class UserProfileService {

  constructor(private _http: Http, private _windowService: WindowService) {}

  getProfile(): Observable<ProfileModel> {
    // set url
    const url = environment.apiURL + 'unauth'; // 'profile';

    // options
    // this could be handled by abstraction
    // should we send application/text for CORS/Preflight and only run Get and Post methods?
    // hopefully a cookie is set to hold auth
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    // this could be handled by abstraction
    // map parms or body
    // call service
    // map on good return
    // catch errors, log, if 401 raise event

    const body = JSON.stringify({ });

    const stubProfileModel = new ProfileModel();
    const profile = Observable.of(stubProfileModel).delay(500);

    // for sprint demo show only
    const returnProfileAsCreator = false;
    const callApiWith401 = false;
    const redirectToSSO = false;

    if (returnProfileAsCreator) {
      stubProfileModel.isCreator = true;
    }

    if (!callApiWith401) { // remove after demo
      return profile;
    }

    if (callApiWith401) { // remove if condition after demo
      return this._http.get(url, options)
          .map((response: Response) => {
              return <ProfileModel>response.json();
          })
          .catch(e => {
              // this could be handled by abstraction
              if (e.status === 401) {
                if (redirectToSSO) { // remove after demo
                  this._windowService.redirectToSSO();
                }

                return Observable.of(null);
                // Observable.throw('Unauthorized');
              }

              // do any other checking for statuses here
          });
    }
  }
}
