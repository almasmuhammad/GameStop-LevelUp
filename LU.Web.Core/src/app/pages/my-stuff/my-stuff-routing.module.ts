import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyStuffComponent } from './my-stuff.component';

const routes: Routes = [
  // { path: '', redirectTo: '/my-stuff', pathMatch: 'full' },
  // { path: 'my-stuff', component: MyStuffComponent }
  { path: '', component: MyStuffComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStuffRoutingModule { }
