import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { UserContextService } from './shared/services/userContext/user-context.service';
import { UserProfileService } from './shared/services/userProfile/user-profile.service';
import { LoggerService } from './shared/services/log/logger.service';
import { WindowService } from './shared/services/window/window.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    LoggerService,
    WindowService,
    { provide: UserProfileService, useClass: UserProfileService },
    UserContextService ]
})
export class AppComponent implements OnInit {

  constructor(
    public _userContextService: UserContextService,
    private _logger: LoggerService) {
  }

  ngOnInit() {
    this.logSetup();
    this._userContextService.getProfile();
  }

  private logSetup() {
    this._logger.logInfo('Envrionment: ' + JSON.stringify(environment));
  }
}
