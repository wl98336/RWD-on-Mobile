import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetureComponent1Component } from './feture-component1.component';

describe('FetureComponent1Component', () => {
  let component: FetureComponent1Component;
  let fixture: ComponentFixture<FetureComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetureComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetureComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
