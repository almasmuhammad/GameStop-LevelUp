import { Injectable } from '@angular/core';

import { AppService } from '../appService';

@Injectable()
export class WindowService {

  constructor(private _appService: AppService) { }

  redirectToSSO() {
    window.location.href = this._appService.appSettings.ssoURL;
  }
}
