import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureModule2Component1Component } from './feature-module2-component1/feature-module2-component1.component';
import { FeatureModule2Component2Component } from './feature-module2-component2/feature-module2-component2.component';

@NgModule({
  declarations: [FeatureModule2Component1Component, FeatureModule2Component2Component],
  imports: [
    RouterModule.forChild([]),
    CommonModule
  ],
  exports: [
    RouterModule,
    FeatureModule2Component1Component, FeatureModule2Component2Component
  ]
})
export class FeatureModule2Module { }
