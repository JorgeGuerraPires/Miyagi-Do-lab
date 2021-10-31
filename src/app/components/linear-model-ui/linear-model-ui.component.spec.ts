import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearModelUIComponent } from './linear-model-ui.component';

describe('LinearModelUIComponent', () => {
  let component: LinearModelUIComponent;
  let fixture: ComponentFixture<LinearModelUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearModelUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearModelUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
