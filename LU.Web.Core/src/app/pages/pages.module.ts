import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { MyStuffComponent } from './my-stuff/my-stuff.component';
import { MyTrainingComponent } from './my-training/my-training.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { ReportsComponent } from './reports/reports.component';
import { CreatorComponent } from './creator/creator.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    MyStuffComponent,
    MyTrainingComponent,
    MyTeamComponent,
    ReportsComponent,
    CreatorComponent
    ]
})
export class PagesModule { }
