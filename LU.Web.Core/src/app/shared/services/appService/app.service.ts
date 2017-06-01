import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

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
    private _cookies: CookieService,
    private _logger: LoggerService
  ) { }

  public loadAppSettings(): void {

  }

  public buildApiActionURL(actionUrl: string): string {
    return this.appSettings.apiURL + actionUrl;
  }

  public buildRequestOptions(): RequestOptions {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return options;
  }

}
