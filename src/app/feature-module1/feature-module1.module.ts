import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetureComponent1Component } from './feture-component1/feture-component1.component';
import { FetureComponent2Component } from './feture-component2/feture-component2.component';

@NgModule({
  declarations: [FetureComponent1Component, FetureComponent2Component],
  imports: [
    CommonModule
  ],
  exports: [
    FetureComponent1Component,
    FetureComponent2Component
  ]
})
export class FeatureModule1Module { }
