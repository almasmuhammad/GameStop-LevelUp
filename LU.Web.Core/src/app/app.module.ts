// Angular Library Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Internationalization (i18n) related Modules/Service/Pipe
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
  TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Cookies used with authentication from API server and possible local storage
import { CookieModule, CookieService } from 'ngx-cookie';
import { ToasterModule, ToasterService, ToasterContainerComponent } from 'angular2-toaster';

// Logger,Window and User Services
import { UserContextService } from './shared/services/userContext/user-context.service';
import { UserProfileService } from './shared/services/userProfile/user-profile.service';
import { LoggerService } from './shared/services/logs/logger-service';
import { WindowService } from './shared/services/window/window.service';
import { AppService } from './shared/services/appService';

// Prevents routing
import { ProfileGuard } from './shared';

// App is our top level component
import { AppComponent } from './app.component';

// Top level Routing Module
import { AppRoutingModule } from './app-routing.module';

// Top level Feature Module
import { PagesModule } from './pages/pages.module';
import {
  ModuleLoadingIndicatorComponent
} from './shared/components/module-loading-indicator/module-loading-indicator.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// import Angular's modules
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToasterModule,
    TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [Http]
            }
        }),
    HttpModule,
    CookieModule.forRoot(),
    PagesModule,
    AppRoutingModule
  ],
  providers: [
    TranslateService,
    ToasterService,
    CookieService,
    LoggerService,
    WindowService,
    AppService,
    UserProfileService,
    UserContextService,
    ProfileGuard ],

  declarations: [
    AppComponent,
    ModuleLoadingIndicatorComponent
    ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    private _userContextService: UserContextService,
    private _router: Router) {

      // capture current URL for use after authentication
     this._userContextService.initialUrlRequest = this._router.url;
  }
 }
