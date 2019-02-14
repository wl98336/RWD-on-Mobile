import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent1Component } from './dynamic-component1.component';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';


@NgModule({
  declarations: [DynamicComponent1Component],
  imports: [
    CommonModule,
    DynamicComponentLoaderModule.forChild(DynamicComponent1Component)
  ]
})
export class DynamicModule1Module { }
