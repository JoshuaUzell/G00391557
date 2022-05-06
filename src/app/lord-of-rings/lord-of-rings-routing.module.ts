import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LordOfRingsPage } from './lord-of-rings.page';

const routes: Routes = [
  {
    path: '',
    component: LordOfRingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LordOfRingsPageRoutingModule {}
