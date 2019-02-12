import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule1Module } from './feature-module1/feature-module1.module'
import {FeatureModule2Module} from './feature-module2/feature-module2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule1Module,
    FeatureModule2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
