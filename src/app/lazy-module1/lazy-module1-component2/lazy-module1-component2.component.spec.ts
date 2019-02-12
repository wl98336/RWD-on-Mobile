import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModule1Component2Component } from './lazy-module1-component2.component';

describe('LazyModule1Component2Component', () => {
  let component: LazyModule1Component2Component;
  let fixture: ComponentFixture<LazyModule1Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyModule1Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyModule1Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
