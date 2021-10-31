import { Component, OnInit } from '@angular/core';
import { Linear } from '../functions/linear';
import { ODEIntegrator } from "../shared/odeintegrator";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';


@Component({
  selector: 'app-linechartv2',
  templateUrl: './linechartv2.component.html',
  styleUrls: ['./linechartv2.component.scss']
})
export class Linechartv2Component implements OnInit {

  //Plots
  public graph: any;
  public graphError: any;
  plot = false;
  plot2 = false;


  Integrator: ODEIntegrator = new ODEIntegrator(0.001, new Linear(), [1]);
  public value: number;
  disabled = false;
  aux: any[] = [];

  /**Simulation setting */
  alfa: number;
  x0 = 1;
  simulationTime: number;

  /**UI related */
  simulationLabel = '';

  //Movable part related
  isLinear = true;//make sure the sure follow the sequence
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.graph = {
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
            text: 'y value',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          }
        }
      }


    }


    this.graphError = {
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
            text: 'y value',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          }
        }
      }
    };


    //Sensitivity analysis related
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });


  }

  sensitivityAnalysis() {

    const aux = makeArr(-5, 5, 10);

    aux.forEach((element) => {
      this.alfa = element;
      this.simulationLabel = `alfa ${Math.round(element)}`;
      this.runSimulations(this.value);
    })

  }

  async runSimulations(finalTime: number) {
    // console.log(this.value);
    this.disabled = true;

    // this.alfa = 0;

    let linear;

    if (this.alfa === undefined)
      linear = new Linear();
    else
      linear = new Linear(this.alfa);

    this.Integrator = new ODEIntegrator(0.001, linear, [this.x0]);//reset the simulator

    /**Note Make this asynch??? */
    this.Integrator.integrate(finalTime);
    /** */

    if (this.simulationLabel)
      this.aux.push(
        { x: this.Integrator.getTimeLog(), y: this.Integrator.getStateLogs(0), type: 'scatter', mode: 'points', name: this.simulationLabel });
    else
      this.aux.push(
        { x: this.Integrator.getTimeLog(), y: this.Integrator.getStateLogs(0), type: 'scatter', mode: 'points' });

    this.plot = true;
    this.disabled = false;
    // this.graph.data = this.aux;

    this.graph = {
      data: this.aux,
      layout: {
        width: 820, height: 540, title: 'Numerical integration of our model',
        xaxis: {
          title: {
            text: 'Time (t)',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          },
        },
        yaxis: {
          title: {
            text: 'state variable (x)',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          }
        }
      }
    }

  }

  /**UI related*/
  formatLabel(value: number) {
    const aux = value;
    this.value = aux;
    return value;
  }

  pitch(event: any) {
    // console.log(event.value);
    this.value = event.value
  }

  pitchAlfa(event: any) {
    // console.log(event.value);
    this.alfa = event.value
  }
  reset() {
    this.graph.data = [];
    this.aux = [];
  }

  analyticalSolution() {
    const aux = this.Integrator.getTimeNoRescaling().map((element) => this.x0 * Math.exp(this.alfa * element));

    this.aux.push(
      { x: this.Integrator.getTimeLog(), y: aux, type: 'scatter', mode: 'points', name: "analytical solution" });


  }

  plotError() {
    this.plot2 = true;

    const aux = this.Integrator.getTimeNoRescaling().map((element) => this.x0 * Math.exp(this.alfa * element));

    const aux3 = this.Integrator.getStateLogs(0);

    const aux2 = aux.map((element, index) => Math.abs(element - aux3[index]));//measure the difference between the analytical and numerical solution

    console.log(aux2);

    this.graphError.data = [{ x: this.Integrator.getTimeLog(), y: aux2, type: 'scatter', mode: 'points', name: "Error" }];
  }




}//end of class

/**Helper */
function makeArr(startValue: number, stopValue: number, cardinality: number) {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(startValue + (step * i));
  }
  return arr;
}
