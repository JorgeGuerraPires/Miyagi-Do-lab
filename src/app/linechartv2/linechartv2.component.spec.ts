import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Linechartv2Component } from './linechartv2.component';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;


describe('Linechartv2Component', () => {
  let component: Linechartv2Component;
  let fixture: ComponentFixture<Linechartv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Linechartv2Component],
      imports: [PlotlyModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Linechartv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initiate the dataset for plotting', () => {

    //assert
    // expect(component.graph).not.toBeTruthy();

    //act #1
    component.runSimulations();

    //assert
    expect(component.graph).toBeTruthy();

  });





});
