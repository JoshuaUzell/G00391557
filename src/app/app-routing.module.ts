import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gog',
    loadChildren: () => import('./gaurdians-of-galaxy/gaurdians-of-galaxy.module').then( m => m.GaurdiansOfGalaxyPageModule)
  },
  {
    path: 'btfuture',
    loadChildren: () => import('./btfuture/btfuture.module').then( m => m.BTFuturePageModule)
  },
  {
    path: 'blade-runner',
    loadChildren: () => import('./blade-runner/blade-runner.module').then( m => m.BladeRunnerPageModule)
  },
  {
    path: 'lord-of-rings',
    loadChildren: () => import('./lord-of-rings/lord-of-rings.module').then( m => m.LordOfRingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
