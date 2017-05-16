import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'pages', redirectTo: 'my-stuff', pathMatch: 'full' },
{
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'my-stuff', pathMatch: 'full' },
      { path: 'my-stuff', loadChildren: './my-stuff/my-stuff.module#My-stuffModule' },
      { path: 'my-team', loadChildren: './my-team/my-team.module#My-teamModule' },
      { path: 'my-training', loadChildren: './my-training/my-training.module#My-trainingModule' },
      { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
      { path: 'creator', loadChildren: './creaor/creator.module#Creator' }
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
export class PagesRouting{}
