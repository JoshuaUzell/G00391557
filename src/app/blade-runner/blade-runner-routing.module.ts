import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BladeRunnerPage } from './blade-runner.page';

const routes: Routes = [
  {
    path: '',
    component: BladeRunnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BladeRunnerPageRoutingModule {}
