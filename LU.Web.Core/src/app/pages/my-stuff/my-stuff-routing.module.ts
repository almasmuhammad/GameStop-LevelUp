import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyStuffComponent } from './my-stuff.component';

import { ProfileGuard } from '../../profile.guard';

const routes: Routes = [
  { path: '', component: MyStuffComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStuffRoutingModule { }
