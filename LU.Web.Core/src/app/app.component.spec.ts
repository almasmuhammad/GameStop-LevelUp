import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { async, ComponentFixture, inject, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { AppComponent } from './app.component';

import { RouterStub } from './testing/router-stub';

import { LoggerService } from './shared/services/logs/logger-service';
import { UserContextService } from './shared/services/userContext/user-context.service';
import { UserProfileService } from './shared/services/userProfile/user-profile.service';
import { UserProfileModel } from './shared/models/user-profile-model';

class UserContextServiceStub {

  private _profileLoadCompleteSource = new Subject<string>();

  initialUrlRequest: string;
  profileLoadComplete = this._profileLoadCompleteSource.asObservable();

  getProfile(): void {}
}

class UserProfileServiceStub {
  getProfile(): Observable<UserProfileModel> { return Observable.of(null); }
}

describe('AppComponent', () => {
  let location, router;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'pages', component: AppComponent }
        ])
        ],
      declarations: [ AppComponent ],
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
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
