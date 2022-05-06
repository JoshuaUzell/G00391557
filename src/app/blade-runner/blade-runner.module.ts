import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BladeRunnerPageRoutingModule } from './blade-runner-routing.module';
import { BladeRunnerPage } from './blade-runner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BladeRunnerPageRoutingModule
  ],
  declarations: [BladeRunnerPage]
})
export class BladeRunnerPageModule {}
