import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule1Module } from './feature-module1/feature-module1.module';
import { FeatureModule2Module } from './feature-module2/feature-module2.module';
import {
  DynamicComponentLoaderModule,
  DynamicComponentManifest
} from './dynamic-component-loader/dynamic-component-loader.module';


const manifests: DynamicComponentManifest[] = [
  {
    componentId: 'DynamicComponent1Component',
    path: 'DynamicModule1', // some globally-unique identifier, used internally by the router
    loadChildren: './dynamic-modules/dynamic-module1/dynamic-module1.module#DynamicModule1Module'
  },
  {
    componentId: 'DynamicModule2',
    path: 'DynamicModule2',
    loadChildren: './dynamic-modules/dynamic-module2/dynamic-module2.module#DynamicModule2Module'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule1Module,
    FeatureModule2Module,
    DynamicComponentLoaderModule.forRoot(manifests)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
