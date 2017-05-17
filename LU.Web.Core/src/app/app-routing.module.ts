import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileGuard } from './profile.guard';

export const routes: Routes = [
  { path: '',   redirectTo: 'pages', pathMatch: 'full', canLoad: [ProfileGuard] },
  { path:  '**', redirectTo:  'page', canLoad: [ProfileGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
