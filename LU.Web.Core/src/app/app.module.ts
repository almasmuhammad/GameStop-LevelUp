/* Angular Library Modules  */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy,
         HashLocationStrategy } from '@angular/common';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { LoggerService } from './shared/services/logs/logger-service';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [AppComponent ],
  providers: [
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
