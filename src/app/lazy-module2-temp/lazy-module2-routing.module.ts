import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyModule2Component1Component } from './lazy-module2-component1/lazy-module2-component1.component';
import { LazyModule2Component2Component } from './lazy-module2-component2/lazy-module2-component2.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '1'
  },
  {
    path: '1',
    component: LazyModule2Component1Component
  },
  {
    path: '2',
    component: LazyModule2Component2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModule2RoutingModule { }
