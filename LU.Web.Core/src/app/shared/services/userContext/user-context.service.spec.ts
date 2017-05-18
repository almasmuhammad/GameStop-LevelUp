import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { UserContextService } from './user-context.service';
import { LoggerService } from '../../../shared/services/logs/logger-service';
import { UserProfileService } from '../../../shared/services/userProfile/user-profile.service';
import { ApplicationProfileViewModel } from '../../../shared/models/application-profile-view-model';

import { RouterStub } from '../../../testing/router-stub';

class UserProfileServiceStub {
  getProfile(): Observable<ApplicationProfileViewModel> { return Observable.of(null); }
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

  it('should ...', inject([UserContextService], (service: UserContextService) => {
    expect(service).toBeTruthy();
  }));
});
