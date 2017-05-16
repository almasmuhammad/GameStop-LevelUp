import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTeamComponent } from './my-team.component';

const routes: Routes = [
  // { path: '', redirectTo: '/my-stuff', pathMatch: 'full' },
  // { path: 'my-stuff', component: MyStuffComponent }
  { path: '', component: MyTeamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTeamRoutingModule { }
