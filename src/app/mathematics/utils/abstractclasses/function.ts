

/**My idea is using this abstract class as template for any functions, that is, derivative */

export abstract class Function {

    /**
* 
* @param x Array[] - this is the function input, with all the variables
* @returns number - this is the returned value
* for now, I have in mind a function that receives an arrays and gives back a number. This is array is for each variable.
* E.g., 2D variable [valuex1, valuex2] -> function -> value returned
*/
    abstract calculate(x: number[] | number): number;

}
