import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonLabelPage } from './ion-label.page';

const routes: Routes = [
  {
    path: '',
    component: IonLabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonLabelPageRoutingModule {}
