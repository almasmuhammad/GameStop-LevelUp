import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MissionDetailRoutingModule } from './mission-detail-routing.module';

import { SwitchComponent } from '../../shared';
import {
  AccordionComponent,
  AccordionTabComponent,
  AccordionHeaderDirective } from '../../shared';

import { TranslateModule } from '@ngx-translate/core';
import { MissionDetailComponent } from './mission-detail.component';
import { DetailsComponent } from './components/details/details.component';
import { AudienceComponent } from './components/audience/audience.component';
import { CategoryComponent } from './components/category/category.component';
import { PrereqComponent } from './components/prereq/prereq.component';
import { PublicationComponent } from './components/publication/publication.component';

@NgModule({
  imports: [
    CommonModule
    , TranslateModule
    , MissionDetailRoutingModule
  ],
  declarations: [
    SwitchComponent
    , MissionDetailComponent
    , DetailsComponent
    , AudienceComponent
    , CategoryComponent
    , PrereqComponent
    , PublicationComponent
    , AccordionComponent
    , AccordionTabComponent
    , AccordionHeaderDirective
    ]
})
export class MissionDetailModule { }
