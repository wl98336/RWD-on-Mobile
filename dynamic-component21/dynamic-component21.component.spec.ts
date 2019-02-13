import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponent21Component } from './dynamic-component21.component';

describe('DynamicComponent21Component', () => {
  let component: DynamicComponent21Component;
  let fixture: ComponentFixture<DynamicComponent21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponent21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponent21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
