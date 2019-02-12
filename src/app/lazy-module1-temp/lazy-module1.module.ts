import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModule1RoutingModule } from './lazy-module1-routing.module';
import { LazyModule1Component1Component } from './lazy-module1-component1/lazy-module1-component1.component';
import { LazyModule1Component2Component } from './lazy-module1-component2/lazy-module1-component2.component';

@NgModule({
  declarations: [ LazyModule1Component1Component, LazyModule1Component2Component],
  imports: [
    CommonModule,
    LazyModule1RoutingModule
  ]
})
export class LazyModule1Module { }
