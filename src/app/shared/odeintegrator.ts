import { Derivative } from "./derivative";

export class ODEIntegrator {

    step;
    derivative: Derivative;
    currentState: number[];
    log: number[][] = [[0]];
    timelog: number[] = [0];
    currentTime: number = 0;

    constructor(step: number = 0.01, derivative: Derivative, initialState: number[]) {

        this.step = step;
        this.derivative = derivative;
        this.currentState = initialState;
        this.log[0] = initialState;
    }

    getcurrentState = () => this.currentState;
    getTimeLog = () => this.timelog.map((element) => element * this.step);
    getTimeNoRescaling = () => this.timelog.map((element) => element);

    getLogs = () => this.log;
    getStateLogs = (n: number) => this.getLogs().map(element => element[n]);

    /**
     * This function will give just one step foward: x_k+1= x_k + f(x_k)*h
     */
    private stepFoward(): void {

        this.currentState = this.currentState.map((element) => element + this.derivative.calculate(element) * this.step);//one step forward

        this.log.push(this.currentState);//save the current simulation output
        this.timelog.push(this.currentTime);
    }

    /**
     * 
     * @param n (number) - how much steps to give
     */

    public integrate(finalTime: number) {
        const n = finalTime / this.step;//this shall calcualte the number of steps to give

        for (let i = 0; i < n; i++) {
            this.stepFoward();//one step forward
            this.currentTime += this.step;//advance the clock one time forward
        }
    }
}