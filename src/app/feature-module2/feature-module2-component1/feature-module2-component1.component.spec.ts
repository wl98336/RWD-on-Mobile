import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureModule2Component1Component } from './feature-module2-component1.component';

describe('FeatureModule2Component1Component', () => {
  let component: FeatureModule2Component1Component;
  let fixture: ComponentFixture<FeatureModule2Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureModule2Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureModule2Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
