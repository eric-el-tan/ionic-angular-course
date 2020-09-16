import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout3Page } from './layout3.page';

const routes: Routes = [
  {
    path: '',
    component: Layout3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Layout3PageRoutingModule {}
