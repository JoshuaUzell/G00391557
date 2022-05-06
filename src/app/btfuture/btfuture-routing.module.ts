import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BTFuturePage } from './btfuture.page';

const routes: Routes = [
  {
    path: '',
    component: BTFuturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BTFuturePageRoutingModule {}
