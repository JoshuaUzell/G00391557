import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaurdiansOfGalaxyPage } from './gaurdians-of-galaxy.page';

const routes: Routes = [
  {
    path: '',
    component: GaurdiansOfGalaxyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaurdiansOfGalaxyPageRoutingModule {}
