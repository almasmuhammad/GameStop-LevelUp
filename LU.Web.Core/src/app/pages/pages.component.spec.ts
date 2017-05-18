import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { async, ComponentFixture, inject, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs/Observable';

import { PagesComponent } from './pages.component';

import { RouterStub } from '../testing/router-stub';

import { LoggerService } from '../shared/services/logs/logger-service';
import { UserContextService } from '../shared/services/userContext/user-context.service';
import { UserProfileService } from '../shared/services/userProfile/user-profile.service';
import { ApplicationProfileViewModel } from '../shared/models/application-profile-view-model';

class UserContextServiceStub {
  getProfile(): void {}
}

class UserProfileServiceStub {
  getProfile(): Observable<ApplicationProfileViewModel> { return Observable.of(null); }
}

describe('PagesComponent', () => {
  let location, router;
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'pages', component: PagesComponent }
        ])
        ],
      declarations: [ PagesComponent ],
      providers: [
      { provide: LoggerService, useClass: LoggerService},
      { provide: UserContextService, useClass: UserContextServiceStub},
      { provide: UserProfileService, useClass: UserProfileServiceStub }
      ]
    })
    .compileComponents();

    const injector = getTestBed();
    location = injector.get(Location);
    router = injector.get(Router);
  }));

  beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
    router = _router;
    location = _location;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
