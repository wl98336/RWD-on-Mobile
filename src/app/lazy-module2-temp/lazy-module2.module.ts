import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModule2RoutingModule } from './lazy-module2-routing.module';
import { LazyModule2Component1Component } from './lazy-module2-component1/lazy-module2-component1.component';
import { LazyModule2Component2Component } from './lazy-module2-component2/lazy-module2-component2.component';

@NgModule({
  declarations: [LazyModule2Component1Component, LazyModule2Component2Component],
  imports: [
    CommonModule,
    LazyModule2RoutingModule
  ]
})
export class LazyModule2Module { }
