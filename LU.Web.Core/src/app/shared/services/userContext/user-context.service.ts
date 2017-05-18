import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { UserProfileModel } from '../../models/user-profile-model';
import { UserProfileService } from '../userProfile';
import { LoggerService } from '../logs/logger-service';

@Injectable()
export class UserContextService {
  private _profileLoadCompleteSource = new Subject<string>();

  initialUrlRequest: string;
  profileLoadComplete = this._profileLoadCompleteSource.asObservable();
  profileModel: UserProfileModel = null;

  constructor(
    private _userService: UserProfileService,
    private _logger: LoggerService) { }

  getProfile(): void {
    this._userService.getProfile().subscribe(profile => {
      this.profileModel = profile;
      this._profileLoadCompleteSource.next(this.initialUrlRequest);
    },
    error => {
      this.profileModel = null;
      this._logger.logError(error);
      this._profileLoadCompleteSource.next(null);
    });
  }
}
