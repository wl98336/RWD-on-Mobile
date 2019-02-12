import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureModule2Component2Component } from './feature-module2-component2.component';

describe('FeatureModule2Component2Component', () => {
  let component: FeatureModule2Component2Component;
  let fixture: ComponentFixture<FeatureModule2Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureModule2Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureModule2Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
