import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MyTrainingRoutingModule } from './my-training-routing.module';

import { MyTrainingComponent } from './my-training.component';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { TrainingHistoryComponent } from './components/training-history/training-history.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MyTrainingRoutingModule
  ],
  declarations: [
    MyTrainingComponent,
    MissionSectionComponent,
    ProfileSectionComponent,
    TrainingHistoryComponent
  ]
})
export class MyTrainingModule { }
