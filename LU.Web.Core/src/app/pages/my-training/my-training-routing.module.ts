import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTrainingComponent } from './my-training.component';

const routes: Routes = [
  { path: '', component: MyTrainingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTrainingRoutingModule { }
