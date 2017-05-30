import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router, Routes } from '@angular/router';

import {TranslateService} from '@ngx-translate/core';

import { UserContextService } from './shared/services/userContext';
import { UserProfileService } from './shared/services/userProfile';
import { LoggerService } from './shared/services/logs';
import { WindowService } from './shared/services/window';
import { environment } from '../environments/environment';

/*
 * Top Level Component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  public loadingProfile: boolean = false;

  constructor(
    private _router: Router,
    public _userContextService: UserContextService,
    private _logger: LoggerService,
    private _translate: TranslateService) { }

  ngOnInit() {

    this._translate.addLangs(['en', 'fr', 'sp']);
    this._translate.setDefaultLang('en');

    this.loadingProfile = true;

    // load config URLs

    // log environment variables
    this._logger.logInfo('Envrionment: ' + JSON.stringify(environment));

    // listen for the profile load complete observation
      this._userContextService.profileLoadComplete.subscribe((url) => {
        this._router.navigate([url]);
      });

    // load user profile or be routed to SSO
    this._userContextService.getProfile();
  }
}


