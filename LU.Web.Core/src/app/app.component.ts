import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router, Routes } from '@angular/router';

import { UserContextService } from './shared/services/userContext/user-context.service';
import { UserProfileService } from './shared/services/userProfile/user-profile.service';
import { LoggerService } from './shared/services/logs/logger-service';
import { WindowService } from './shared/services/window/window.service';
import { environment } from '../environments/environment';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(
    private _router: Router,
    public _userContextService: UserContextService,
    private _logger: LoggerService) { }

  ngOnInit() {
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
