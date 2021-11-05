import { Component, OnInit } from '@angular/core';
import { Linear } from 'src/app/mathematics/utils/functions/linear';
import { Euler } from 'src/app/mathematics/utils/integrators/euler';
import { Parameters } from "../interface/parameters";
import { Uicontrol } from '../interface/uicontrol';

@Component({
  selector: 'app-model1',
  templateUrl: './model1.component.html',
  styleUrls: ['./model1.component.scss']
})
export class Model1Component implements OnInit {

  showBoxDiagram = false;

  //UI
  uicontrol: Uicontrol =
    { simulationButton: true };

  //inputs for simulation  
  parameters!: Parameters;

  //Arranging for simulation
  derivative = new Linear();
  initialState = [2];

  //Numerical integration
  euler = new Euler(this.derivative, this.initialState);

  //plot
  simulationPlot: any;
  ErrorPlot: any;
  sensitivityAnalysisPlot: any;

  constructor() { }

  ngOnInit(): void {
    this.simulationPlot = {
      data: [],

      layout: {
        width: 820, height: 540, title: 'Numerical integration of dy/dx=x', xaxis: {
          title: {
            text: 'Time',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          },
        },
        yaxis: {
          title: {
            text: 'State variable',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          }
        }
      }
    };

    this.ErrorPlot = {
      data: [],

      layout: {
        width: 820, height: 540, title: 'Plotting the error: numerical solution vs. analytical one', xaxis: {
          title: {
            text: 'Time',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          },
        },
        yaxis: {
          title: {
            text: 'Error',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          }
        }
      }
    };

    this.sensitivityAnalysisPlot = {
      data: [],

      layout: {
        width: 820, height: 540, title: 'Analysis of sensitivity of the model', xaxis: {
          title: {
            text: 'Time',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          },
        },
        yaxis: {
          title: {
            text: 'Error',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          }
        }
      }
    };

  }

  sensitivityAnalysis() {
    console.log("here")

    const aux = makeArr(-2, 2, 30);
    // this.aux = [];//will clean the current simulation

    aux.forEach((element) => {
      //simulations  
      this.derivative.alfa = element;
      this.euler = new Euler(this.derivative, this.initialState);

      this.euler.forward(this.parameters.simulationTimeSpan);
      this.sensitivityAnalysisPlot.data.push({ x: this.euler.getTimeLog(), y: this.euler.getStateLog(0), type: 'scatter', mode: 'points', name: `simulation alfa=${element.toFixed(2)}` })
    });

  };



  simulate(event: Parameters) {
    //Preliminaries
    this.uicontrol.simulationButton = false;//avoid mulltiple simulations
    this.parameters = event;//saves locally the simulation parameters

    this.derivative.alfa = this.parameters.alfa;
    this.euler = new Euler(this.derivative, this.initialState);


    this.euler.forward(this.parameters.simulationTimeSpan);

    this.uicontrol.simulationButton = true;//release simulation button

    if (this.parameters.simulationLabel) {
      this.simulationPlot.data.push({ x: this.euler.getTimeLog(), y: this.euler.getStateLog(0), type: 'scatter', mode: 'points', name: this.parameters.simulationLabel })
      this.parameters.simulationLabel = "";
    } else
      this.simulationPlot.data.push({ x: this.euler.getTimeLog(), y: this.euler.getStateLog(0), type: 'scatter', mode: 'points' })
  }

  reset() {
    this.simulationPlot.data = [];
  }

  analyticalSolution() {
    const aux = this.euler.getTimeLogNoScaling().map((element) => this.initialState[0] * Math.exp(this.parameters.alfa * element));

    this.simulationPlot.data.push({ x: this.euler.getTimeLogNoScaling(), y: aux, type: 'scatter', mode: 'points', name: "analytical solution" });

  }

  plotError() {

    // const aux = this.Integrator.getTimeNoRescaling().map((element) => this.x0 * Math.exp(this.alfa * element));
    const aux = this.euler.getTimeLogNoScaling().map((element) => this.initialState[0] * Math.exp(this.parameters.alfa * element));
    const aux2 = this.euler.getStateLog(0);

    const aux3 = aux.map((element, index) => Math.abs(element - aux2[index]));//measure the difference between the analytical and numerical solution

    this.ErrorPlot.data = [{ x: this.euler.getTimeLogNoScaling(), y: aux3, type: 'scatter', mode: 'points', name: "Error" }];
  }

  clickButton() {
    this.showBoxDiagram = !this.showBoxDiagram;
  }

}

/**Helper */
function makeArr(startValue: number, stopValue: number, cardinality: number) {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(startValue + (step * i));
  }
  return arr;
}

