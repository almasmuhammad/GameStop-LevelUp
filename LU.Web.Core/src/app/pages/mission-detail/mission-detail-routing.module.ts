import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionDetailComponent } from './mission-detail.component';

const routes: Routes = [
  { path: '', component: MissionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionDetailRoutingModule { }
