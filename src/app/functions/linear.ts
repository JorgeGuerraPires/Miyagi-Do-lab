import { Derivative } from "../shared/derivative";

export class Linear extends Derivative {
    alfa: number;

    constructor(alfa?: number) {
        super();


        if (alfa === undefined)
            this.alfa = 1;
        else
            this.alfa = alfa;








        // if (alfa !== undefined)
        //     this.alfa = alfa;
        // else
        //     this.alfa = 1;

    }

    calculate(x: number): number {

        // throw new Error("Method not implemented.");
        let output = 0;

        console.log(this.alfa);

        //logic--------------------
        output = x * this.alfa;
        //--------------------------

        return output;
    }

}
