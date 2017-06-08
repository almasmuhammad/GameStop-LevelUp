import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';

import { CreatorComponent } from './creator.component';
import { MissionCentralComponent } from './mission-central/mission-central.component';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CreatorRoutingModule
  ],
  declarations: [
    CreatorComponent,
    MissionCentralComponent
  ]
})
export class CreatorModule { }
