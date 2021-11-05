import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxdiagramComponent } from './boxdiagram.component';

describe('BoxdiagramComponent', () => {
  let component: BoxdiagramComponent;
  let fixture: ComponentFixture<BoxdiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxdiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxdiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
