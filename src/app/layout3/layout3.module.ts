import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Layout3PageRoutingModule } from './layout3-routing.module';

import { Layout3Page } from './layout3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Layout3PageRoutingModule
  ],
  declarations: [Layout3Page]
})
export class Layout3PageModule {}
