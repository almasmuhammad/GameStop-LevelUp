import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MyStuffRoutingModule } from './my-stuff-routing.module';
import { MyStuffComponent } from './my-stuff.component';

import {
  ProfileSectionComponent,
  AvatarSectionComponent,
  UserInfoSectionComponent,
  XpSectionComponent,
  MyProfileAvatarComponent,
  UnlockIconComponent,
  UserMissionPercentageComponent,
  UserNameComponent,
  UserRankComponent,
  XpCaptainsLogComponent,
  XpCategoriesComponent,
  XpLevelComponent,
  XpProgressbarComponent
} from './components/profile-section';

  import {
    MissionSectionComponent
  } from './components/mission-section';

  import {
    TrackingSectionComponent
  } from './components/tracking-section';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MyStuffRoutingModule
  ],
  declarations: [
    MyStuffComponent,
    ProfileSectionComponent,
    AvatarSectionComponent,
    UserInfoSectionComponent,
    XpSectionComponent,
    MyProfileAvatarComponent,
    UnlockIconComponent,
    UserMissionPercentageComponent,
    UserNameComponent,
    UserRankComponent,
    XpCaptainsLogComponent,
    XpCategoriesComponent,
    XpLevelComponent,
    XpProgressbarComponent,
    MissionSectionComponent,
    TrackingSectionComponent
    ]
})
export class MyStuffModule { }
