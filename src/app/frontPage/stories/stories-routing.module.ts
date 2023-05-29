import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesPage } from './stories.page';

const routes: Routes = [
  {
    path: '',
    component: StoriesPage
  },
  {
  path:'articles',
  loadChildren: () => import('../../articles/articles.module').then( m => m.ArticlesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesPageRoutingModule {}
