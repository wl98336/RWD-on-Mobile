import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyModule1Component1Component } from './lazy-module1-component1/lazy-module1-component1.component';
import { LazyModule1Component2Component } from './lazy-module1-component2/lazy-module1-component2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "1"
  },
  {
    path: '1',
    component: LazyModule1Component1Component
  },
  {
    path: '2',
    component: LazyModule1Component1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModule1RoutingModule { }
