import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BTFuturePageRoutingModule } from './btfuture-routing.module';
import { BTFuturePage } from './btfuture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BTFuturePageRoutingModule
  ],
  declarations: [BTFuturePage]
})
export class BTFuturePageModule {}
