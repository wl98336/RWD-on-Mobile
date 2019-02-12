import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModule2Component2Component } from './lazy-module2-component2.component';

describe('LazyModule2Component2Component', () => {
  let component: LazyModule2Component2Component;
  let fixture: ComponentFixture<LazyModule2Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyModule2Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyModule2Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
