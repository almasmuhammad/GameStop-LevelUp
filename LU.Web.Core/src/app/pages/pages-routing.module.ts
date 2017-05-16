import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
export const routes: Routes = [
  // { path: 'pages', redirectTo: 'my-stuff', pathMatch: 'full' },
  {
      path: 'pages',
      component: PagesComponent,
      children: [
        { path: '', redirectTo: 'my-stuff', pathMatch: 'full' },
        { path: 'my-stuff',  loadChildren: 'app/pages/my-stuff/my-stuff.module#MyStuffModule' },
        { path: 'my-team', loadChildren: 'app/pages/my-team/my-team.module#MyTeamModule' }
        // { path: 'my-training', loadChildren: './my-training/my-training.module#MyTrainingModule' },
        // { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
        // { path: 'creator', loadChildren: './creaor/creator.module#CreatorModule' }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    // (
    //   { preloadingStrategy: SelectivePreloadingStrategy }
    // )
  ],
    exports: [
    RouterModule
  ],
})
export class PagesRoutingModule { }
