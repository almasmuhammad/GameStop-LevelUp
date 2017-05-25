import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSectionComponent } from "app/pages/my-stuff/components/profile-section";
import { ProfileSectionService } from "app/pages/my-stuff/components/profile-section/profile-section.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ProfileSectionComponent
    ],
  providers:[
   ProfileSectionService
    ],
  declarations: [
    ProfileSectionComponent
    ]
})
export class ProfileSectionModule { }
