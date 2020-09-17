import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssTablePageRoutingModule } from './css-table-routing.module';

import { CssTablePage } from './css-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssTablePageRoutingModule
  ],
  declarations: [CssTablePage]
})
export class CssTablePageModule {}
