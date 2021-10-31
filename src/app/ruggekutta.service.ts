import { Injectable } from '@angular/core';
import { ODEIntegrator } from ".//shared/odeintegrator"



@Injectable({
  providedIn: 'root'
})
export class RuggekuttaService {



  Integrator: ODEIntegrator = new ODEIntegrator(0.1, derivative, [1]);


  constructor() {
    // this.run()
    // const sum = (x: number, y: number) => x + y;
    // this.Integrator.test(sum, 6, 2);
    this.Integrator.integrate(30);
    console.log(this.Integrator.getStateLogs(0));

  }



  run(): any {

    return {
      data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'points', marker: { color: 'red' } },

      ],
      layout: { width: 820, height: 540, title: 'A Fancy Plot' }
    }

  }

  /**
 * this is the target differential equations
 * @param  {Array}   y     It is an unknown function of x which we would like to approximate
 * @param  {Number}  x     x
 * @return {Array}   dydx  The rate at which y changes, is a function of x and of y
 */
  private derives = function (x: any, y: any) {
    // you need to return the integration
    var dydx = []

    dydx[0] = y[0] + y[1]
    dydx[1] = 2 * y[1] + y[2]
    dydx[2] = 3 * y[2]

    return dydx
  }



}

function derivative(x: number[]) {
  return x.map((element) => element);

}
