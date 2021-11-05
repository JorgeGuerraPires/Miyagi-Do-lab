import { Function } from "../abstractclasses/function";

export class Linear extends Function {
    alfa: number;

    constructor(alfa?: number) {
        super();

        if (alfa === undefined)
            this.alfa = 1;
        else
            this.alfa = alfa;
    }

    /**
* 
* @param x Array[] - this is the function input, with all the variables
* @returns number - this is the returned value
* for now, I have in mind a function that receives an arrays and gives back a number. This is array is for each variable.
* E.g., 2D variable [valuex1, valuex2] -> function -> value returned
*/
    calculate(x: number): number {
        return this.alfa * x;
    }
}
