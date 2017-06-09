import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  CanDeactivateGuardService,
  CanComponentDeactivate } from '../../shared';

import { MissionDetailComponent } from './mission-detail.component';

const routes: Routes = [
  { path: '',
    component: MissionDetailComponent,
    canDeactivate: [ CanDeactivateGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionDetailRoutingModule { }
