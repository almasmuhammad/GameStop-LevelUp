import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PagesRoutingModule } from './pages-routing.module';

// Replaces old jQuery behavior
import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';

import { PagesComponent } from './pages.component';
import { NavbarComponent } from '../shared/components/header/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  exports: [
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    NavbarComponent
    ]
})
export class PagesModule { }
