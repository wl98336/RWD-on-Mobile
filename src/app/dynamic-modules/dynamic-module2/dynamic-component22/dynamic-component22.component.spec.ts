import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponent22Component } from './dynamic-component22.component';

describe('DynamicComponent22Component', () => {
  let component: DynamicComponent22Component;
  let fixture: ComponentFixture<DynamicComponent22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponent22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponent22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
