import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout2Page } from './layout2.page';

const routes: Routes = [
  {
    path: '',
    component: Layout2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layout2PageRoutingModule {}
