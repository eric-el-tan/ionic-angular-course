import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Layout2PageRoutingModule } from './layout2-routing.module';

import { Layout2Page } from './layout2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Layout2PageRoutingModule
  ],
  declarations: [Layout2Page]
})
export class Layout2PageModule {}
