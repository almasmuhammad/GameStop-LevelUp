import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { NavbarComponent } from '../shared/components/header/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
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
