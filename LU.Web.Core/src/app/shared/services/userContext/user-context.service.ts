import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ApplicationProfileViewModel } from '../../models/application-profile-view-model';
import { UserProfileService } from '../userProfile/user-profile.service';
import { LoggerService } from '../logs/logger-service';

@Injectable()
export class UserContextService {
// holds profile model and refreshes profile
private _profileLoadCompleteSource = new Subject();

profileLoadComplete = this._profileLoadCompleteSource.asObservable();
 profileModel: ApplicationProfileViewModel = null;

  constructor(
    private _userService: UserProfileService,
    private _logger: LoggerService) { }

  getProfile(): void {
    this._userService.getProfile().subscribe(profile => {
      if (profile != null) {
        this.profileModel = profile;
        this._profileLoadCompleteSource.next();
      }
    },
    error => {
      this.profileModel = null;
      this._logger.logError(error);
      this._profileLoadCompleteSource.next();
    });
  }

}
