

/**Decided to make abstract, as so in the future I can easily implement better routines */
import { Function } from "./function";


export abstract class ODEIntegrator {

    //Simulation parameters
    step: number = 0.001;//time step for each integration
    currentTime: number = 0;
    currentState: number[] = [];
    derivative: Function;
    log: number[][] = [[0]];
    timelog: number[] = [0];
    finalTime!: number;

    //getters and setters
    getcurrentState = () => this.currentState;
    getTimeLog = () => {
        const lastElement = this.timelog[this.timelog.length - 1];
        return this.timelog.map((element) => (this.finalTime * element) / lastElement);
    }

    getTimeLogNoScaling = () => this.timelog.map((element) => element);


    getStateLog = (n: number) => this.log.map((element) => element[n]);



    constructor(derivative: Function, initialState: number[], step?: number) {
        if (step)
            this.step = step;

        this.derivative = derivative;

        //
        this.currentState = initialState;
        this.log[0] = initialState;
    }

    /**Should integrate one step foward in time */
    abstract stepFoward(): void;

    /**concrete methods */
    forward(finalTime: number) {

        this.finalTime = finalTime;

        const n = finalTime / this.step;//this shall calcualte the number of steps to give

        for (let i = 0; i < n; i++) {
            this.stepFoward();//one step forward
            this.currentTime += this.step;//advance the clock one time forward
        }
    }
}