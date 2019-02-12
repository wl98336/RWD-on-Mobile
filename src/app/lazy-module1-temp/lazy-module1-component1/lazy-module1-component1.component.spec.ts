import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModule1Component1Component } from './lazy-module1-component1.component';

describe('LazyModule1Component1Component', () => {
  let component: LazyModule1Component1Component;
  let fixture: ComponentFixture<LazyModule1Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyModule1Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyModule1Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
