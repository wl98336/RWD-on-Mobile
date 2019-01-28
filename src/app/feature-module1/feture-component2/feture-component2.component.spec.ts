import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetureComponent2Component } from './feture-component2.component';

describe('FetureComponent2Component', () => {
  let component: FetureComponent2Component;
  let fixture: ComponentFixture<FetureComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetureComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetureComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
