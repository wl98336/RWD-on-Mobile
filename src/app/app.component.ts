import { Component, ViewChild, ViewContainerRef  } from '@angular/core';
import { DynamicComponentLoader } from './dynamic-component-loader/dynamic-component-loader.service';
import { DynamicComponent1Component } from './dynamic-modules/dynamic-module1/dynamic-component1.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RWD-on-Mobile';
  @ViewChild('testOutlet', { read: ViewContainerRef })
  testOutlet: ViewContainerRef | undefined;

  constructor(private dynamicComponentLoader: DynamicComponentLoader){}
  testDynamicComponent(){
    console.log("11111111");
    this.dynamicComponentLoader
    .getComponentFactory<DynamicComponent1Component>('DynamicComponent1Component')
    .subscribe({
      next: componentFactory => {
        if(!this.testOutlet){
          console.log("33333333", this.testOutlet)
          return;
        }
        console.log("22222222")
        const ref = this.testOutlet.createComponent(componentFactory);
        ref.changeDetectorRef.detectChanges();
      },
      error: err => {
        console.warn(err);
      }
    })
  }
}
