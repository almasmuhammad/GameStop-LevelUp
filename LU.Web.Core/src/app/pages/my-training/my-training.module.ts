import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MyTrainingRoutingModule } from './my-training-routing.module';

import { MyTrainingComponent } from './my-training.component';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { TrainingHistoryComponent } from './components/training-history/training-history.component';
import { AvatarSectionComponent } from './components/profile-section/avatar-section/avatar-section.component';
import { UserInfoSectionComponent } from './components/profile-section/user-info-section/user-info-section.component';
import { CertifiedSectionComponent } from './components/profile-section/certified-section/certified-section.component';
import { UserNameComponent } from './components/profile-section/user-info-section/user-name/user-name.component';
import { UserRankComponent } from './components/profile-section/user-info-section/user-rank/user-rank.component';
import { OrgStructureComponent } from './components/profile-section/user-info-section/org-structure/org-structure.component';
import { JobProfileComponent } from './components/profile-section/user-info-section/job-profile/job-profile.component';
import { XpLevelComponent } from './components/profile-section/user-info-section/xp-level/xp-level.component';
import { LastTrainedSectionComponent } from './components/profile-section/last-trained-section/last-trained-section.component';

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
    TrainingHistoryComponent,
    AvatarSectionComponent,
    UserInfoSectionComponent,
    CertifiedSectionComponent,
    UserNameComponent,
    UserRankComponent,
    OrgStructureComponent,
    JobProfileComponent,
    XpLevelComponent,
    LastTrainedSectionComponent
  ]
})
export class MyTrainingModule { }
