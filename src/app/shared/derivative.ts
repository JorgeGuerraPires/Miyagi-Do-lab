export abstract class Derivative {
    /**
     * 
     * @param x Array[] - this is the function input, with all the variables
     * @returns Array - this is the returned value
     * for now, I have in mind a function that reserves an arrays and gives back a number
     */
    abstract calculate(x: number[] | number): number;


}
