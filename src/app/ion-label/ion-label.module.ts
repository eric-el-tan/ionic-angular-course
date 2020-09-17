import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonLabelPageRoutingModule } from './ion-label-routing.module';

import { IonLabelPage } from './ion-label.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonLabelPageRoutingModule
  ],
  declarations: [IonLabelPage]
})
export class IonLabelPageModule {}
