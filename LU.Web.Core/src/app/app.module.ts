// Angular Library Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Logger,Window and User Services
import { UserContextService } from './shared/services/userContext/user-context.service';
import { UserProfileService } from './shared/services/userProfile/user-profile.service';
import { LoggerService } from './shared/services/logs/logger-service';
import { WindowService } from './shared/services/window/window.service';

import { ProfileGuard } from './shared/guards';

// App is our top level component
import { AppComponent } from './app.component';

// Top level Routing Module
import { AppRoutingModule } from './app-routing.module';

// Top level Feature Module
import { PagesModule } from './pages/pages.module';

// import Angular's modules
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [
    LoggerService,
    WindowService,
    UserProfileService,
    UserContextService,
    ProfileGuard ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    private _userContextService: UserContextService,
    private _router: Router) {
     this._userContextService.initialUrlRequest = this._router.url;
  }
 }
