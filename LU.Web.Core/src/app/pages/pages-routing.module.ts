import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

import { ProfileGuard } from '../shared';

export const routes: Routes = [
  {
      path: 'pages',
      component: PagesComponent,
      children: [
        { path: '', redirectTo: 'my-stuff', pathMatch: 'full' },
        { path: 'my-stuff',
          loadChildren: 'app/pages/my-stuff/my-stuff.module#MyStuffModule',
          canActivate: [ ProfileGuard ] },
        { path: 'my-team',
          loadChildren: 'app/pages/my-team/my-team.module#MyTeamModule',
          canActivate: [ ProfileGuard ] },
        { path: 'my-training',
          loadChildren: 'app/pages/my-training/my-training.module#MyTrainingModule',
          canActivate: [ ProfileGuard ] },
        { path: 'reports',
          loadChildren: 'app/pages/reports/reports.module#ReportsModule',
          canActivate: [ ProfileGuard ] },
        { path: 'creator',
          loadChildren: 'app/pages/creator/creator.module#CreatorModule',
          canActivate: [ ProfileGuard ] },
        { path: 'mission-detail',
          loadChildren: 'app/pages/mission-detail/mission-detail.module#MissionDetailModule',
          canActivate: [ ProfileGuard ] },
        { path: 'mission-detail/:1d',
          loadChildren: 'app/pages/mission-detail/mission-detail.module#MissionDetailModule',
          canActivate: [ ProfileGuard ] },
        { path:  '**', redirectTo:  'my-stuff' }
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
