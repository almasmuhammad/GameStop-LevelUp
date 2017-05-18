import { Component, Injectable, DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

import { async, ComponentFixture, inject, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs/Observable';

import { PagesComponent } from './pages.component';

import { RouterStub } from '../testing/router-stub';

import { UserContextService } from '../shared/services/userContext/user-context.service';
import { UserProfileModel } from '../shared/models/user-profile-model';
import { ApplicationRoles } from '../shared/models/application-roles';

class UserContextServiceStub {
  profileLoadComplete = Observable.of('');
  profileModel: UserProfileModel;
  constructor() {
    this.profileModel = new UserProfileModel();
    this.profileModel.roles = [ApplicationRoles.CreatorRead];
   }
}

describe('PagesComponent', () => {
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
        { provide: UserContextService, useClass: UserContextServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('when the user has Creator roles then show Creator nav command', () => {
    const creatorLink = fixture.debugElement.query(By.css('.creatorLink'));
    expect(creatorLink).toBeTruthy();
  });

  it('when the user does not have Creator roles then do not show Creator nav command', () => {
    fixture.componentInstance._userContextService.profileModel.roles = [];
    fixture.detectChanges();
    const creatorLink = fixture.debugElement.query(By.css('.creatorLink'));
    expect(creatorLink).toBeFalsy();
  });
});
