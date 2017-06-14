import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { FileUploadModule } from 'ng2-file-upload';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MissionDetailRoutingModule } from './mission-detail-routing.module';

import { MissionDetailService } from './services';

import {
  SwitchComponent,
  AccordionComponent,
  AccordionTabComponent,
  AccordionHeaderDirective,
  CanDeactivateGuardService } from '../../shared';

import { MissionDetailComponent } from './mission-detail.component';
import { DetailsComponent } from './components/details/details.component';
import { AudienceComponent } from './components/audience/audience.component';
import { CategoryComponent } from './components/category/category.component';
import { PrereqComponent } from './components/prereq/prereq.component';
import { PublicationComponent } from './components/publication/publication.component';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , TranslateModule
    , FileUploadModule
    , ModalModule.forRoot()
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
    ],
  providers: [
    CanDeactivateGuardService,
    MissionDetailService
  ]
})
export class MissionDetailModule { }
