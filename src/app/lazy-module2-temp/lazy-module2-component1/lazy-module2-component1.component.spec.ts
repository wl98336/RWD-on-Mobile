import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModule2Component1Component } from './lazy-module2-component1.component';

describe('LazyModule2Component1Component', () => {
  let component: LazyModule2Component1Component;
  let fixture: ComponentFixture<LazyModule2Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyModule2Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyModule2Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
