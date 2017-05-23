import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileGuard } from './shared/guards';

export const routes: Routes = [
  { path: '',   redirectTo: 'pages', pathMatch: 'full' },
  { path:  '**', redirectTo:  'page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
