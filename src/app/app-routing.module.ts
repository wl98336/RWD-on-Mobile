import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeatureModule2Module} from './feature-module2/feature-module2.module';
import { FeatureModule2Component1Component } from './feature-module2/feature-module2-component1/feature-module2-component1.component'

const routes: Routes = [
  {
    path: 'feature-module2',
    component: FeatureModule2Component1Component
  },
  {
    path: 'lazy-module1',
    loadChildren : './lazy-module1-temp/lazy-module1.module#LazyModule1Module'
  },
  {
    path: 'lazy-module2',
    loadChildren : './lazy-module2-temp/lazy-module2.module#LazyModule2Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
