import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router, Routes } from '@angular/router';

import {TranslateService} from '@ngx-translate/core';

import { UserContextService } from './shared/services/userContext';
import { UserProfileService } from './shared/services/userProfile';
import { LoggerService } from './shared/services/logs';
import { WindowService } from './shared/services/window';
// import { environment } from '../environments/environment';
import { AppService } from './shared/services/appService';

/*
 * Top Level Component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  public loadingProfile = false;
  public loadComplete = false;
  public loading = true;

  constructor(
    private _router: Router,
    private _appService: AppService,
    private _windowService: WindowService,
    public _userContextService: UserContextService,
    private _logger: LoggerService,
    private _translate: TranslateService) { }

  ngOnInit() {

    this._translate.addLangs(['en', 'fr', 'sp']);
    this._translate.setDefaultLang('en');
    this._userContextService.initialUrlRequest = this._router.url;

    // load config URLs
    this._appService.loadAppSettings()
    .subscribe((response) => {

      if (this._appService.canLoadProfile()) {
        this.loadComplete = true;

        // listen for the profile load complete observation
        this._userContextService.profileLoadComplete.subscribe((url) => {
          this.loading = false;
          this._router.navigate([url]);
        });

        this.loadingProfile = true;
        // load user profile or be routed to SSO
        this._userContextService.getProfile();

      } else {
        this._windowService.redirectToSSO();
      }
    });
  }
}


