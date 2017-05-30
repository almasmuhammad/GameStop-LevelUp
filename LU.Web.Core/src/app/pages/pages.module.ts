import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { NavbarComponent } from '../shared/components/header/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule
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
