import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { CookieService } from 'ngx-cookie';

import { LoggerService } from './../logs';
import { AppSettingsModel } from './../../models';



@Injectable()
export class AppService {

  private loggedOutSubject: Subject<string>;
  private serviceErrorSubject: Subject<number>;

  public loggedOutEvent = this.loggedOutSubject.asObservable();

  public serviceErrorEvent = this.serviceErrorSubject.asObservable();

  public appSettings: AppSettingsModel;

  constructor(
    private _http: Http,
    private _cookies: CookieService,
    private _logger: LoggerService
  ) { }

  public buildApiActionURL(actionUrl: string): string {
    return this.appSettings.apiURL + actionUrl;
  }

  public buildRequestOptions(): RequestOptions {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return options;
  }

  public canLoadProfile(): boolean {
    const token = this._cookies.get('accessToken');
    return (token || '').length > 0;
  }

  public handleServiceError(error: Response | any): ErrorObservable {
    if (!error) {
      return;
    }
    if (error.status === 401) {
      this.loggedOutSubject.next(null);
    }
    if (error.status !== 401) {
      this.serviceErrorSubject.next(error.status);
    }
    this._logger.logError('service call error\n' + error);
    return Observable.throw(error);
  }

  public loadAppSettings(): void {
    this._http.get('assets/appSettings.json')
    .map((response: Response) => {
      this.appSettings = new AppSettingsModel();
      const appSettings = <AppSettingsModel>response.json();
      this.appSettings.apiURL = appSettings.apiURL;
      this.appSettings.ssoURL = appSettings.ssoURL;
    })
    .catch(this.handleServiceError);
  }

}
