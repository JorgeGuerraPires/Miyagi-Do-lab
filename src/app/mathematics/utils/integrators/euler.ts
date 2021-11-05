import { ODEIntegrator } from "../abstractclasses/odeintegrator";

export class Euler extends ODEIntegrator {

    /**Should integrate one step foward in time, used on the superclass */
    stepFoward(): void {

        this.currentState = this.currentState.map((element) => element + this.derivative.calculate(element) * this.step);//one step forward

        //Save the information from the current simulation
        this.log.push(this.currentState);
        this.timelog.push(this.currentTime);
    }
}
