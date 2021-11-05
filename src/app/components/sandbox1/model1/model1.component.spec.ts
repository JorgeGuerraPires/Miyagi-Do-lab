import { ComponentFixture, TestBed } from '@angular/core/testing';

//Mocks
import { Model1Component } from './model1.component';
import { MockComponent, MockModule } from 'ng-mocks';

import { LinearComponent } from 'src/app/mathematics/utils/plotting/linear/linear.component';
import { PlotlyComponent } from 'angular-plotly.js';
import { ControlpanelComponent } from '../controlpanel/controlpanel.component';
import { MatStepperModule } from '@angular/material/stepper';


describe('Model1Component', () => {
  let component: Model1Component;
  let fixture: ComponentFixture<Model1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        //I am not testing the Mat step, there is a whole theory on the site of angular material, tried but things got complicate
        MockModule(MatStepperModule)
      ],
      declarations:
        [Model1Component,
          MockComponent(LinearComponent),
          MockComponent(PlotlyComponent),
          MockComponent(ControlpanelComponent),]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Model1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Graph for simulation plotting should not load when data is not provided', () => {

    let emailInput = document.getElementById("plotSimulations");

    expect(emailInput).not.toBeTruthy();//before adding data
  })



  it('Graph for simulation plotting should load when data is provided', () => {

    //Arrage
    let emailInput;
    //act
    component.simulationPlot = {
      data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
      ],
      layout: { width: 320, height: 240, title: 'A Fancy Plot' }
    };

    //we need this, otherwise the task will fail because it happens before the changes take place
    fixture.detectChanges();
    emailInput = document.getElementById("plotSimulations");

    expect(emailInput).toBeTruthy(); //after adding data
  });

  it('Should show graph just when we have dataset', () => {

    //Arrage
    let emailInput;
    //act
    component.simulationPlot = {
      data: [],//no data, just initialized 
      layout: { width: 320, height: 240, title: 'A Fancy Plot' }
    };

    //we need this, otherwise the task will fail because it happens before the changes take place
    fixture.detectChanges();
    emailInput = document.getElementById("plotSimulations");

    expect(emailInput).not.toBeTruthy(); //after adding data
  });

  fit('Should show error graph just when we have dataset for the graph', () => {

    //Arrage
    let emailInput;
    //act
    component.ErrorPlot = {
      data: [],//no data, just initialized 
      layout: { width: 320, height: 240, title: 'A Fancy Plot' }
    };

    //we need this, otherwise the task will fail because it happens before the changes take place
    fixture.detectChanges();
    emailInput = document.getElementById("ErrorPlot");

    expect(emailInput).not.toBeTruthy(); //after adding data
  });

  fit('Should show error graph when we have dataset for the graph', () => {

    //Arrage
    let emailInput;
    //act
    component.ErrorPlot = {
      data: [{ x: [1], y: [2] }],//adding data
      layout: { width: 320, height: 240, title: 'A Fancy Plot' }
    };

    //we need this, otherwise the task will fail because it happens before the changes take place
    fixture.detectChanges();
    emailInput = document.getElementById("ErrorPlot");

    expect(emailInput).toBeTruthy(); //after adding data
  });




});
