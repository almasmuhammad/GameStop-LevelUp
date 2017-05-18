import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { UserContextService } from './user-context.service';
import { LoggerService } from '../../../shared/services/logs/logger-service';
import { UserProfileService } from '../../../shared/services/userProfile/user-profile.service';
import { UserProfileModel } from '../../../shared/models/user-profile-model';

import { RouterStub } from '../../../testing/router-stub';

class UserProfileServiceStub {
  private _userProfileModel: UserProfileModel;
  constructor() {
    this._userProfileModel = new UserProfileModel();
    this._userProfileModel.roles = ['CreatorRead'];
  }
  getProfile(): Observable<UserProfileModel> { return Observable.of(this._userProfileModel); }
}

describe('UserContextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserContextService,
      { provide: LoggerService, useClass: LoggerService },
      { provide: UserProfileService, useClass: UserProfileServiceStub }
      ]
    });
  });

  it('when a user profile is requested and one is returned from the API then profile should exist',
  inject([UserContextService], (service: UserContextService) => {
    service.getProfile();
    expect(service.profileModel).toBeTruthy();
  }));

});
