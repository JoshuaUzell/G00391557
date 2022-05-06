import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GaurdiansOfGalaxyPageRoutingModule } from './gaurdians-of-galaxy-routing.module';
import { GaurdiansOfGalaxyPage } from './gaurdians-of-galaxy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaurdiansOfGalaxyPageRoutingModule
  ],
  declarations: [GaurdiansOfGalaxyPage]
})
export class GaurdiansOfGalaxyPageModule {}
