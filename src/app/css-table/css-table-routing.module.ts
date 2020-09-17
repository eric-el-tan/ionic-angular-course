import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssTablePage } from './css-table.page';

const routes: Routes = [
  {
    path: '',
    component: CssTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssTablePageRoutingModule {}
