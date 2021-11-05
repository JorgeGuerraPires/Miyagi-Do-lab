import { Linear } from '../functions/linear';
import { Euler } from './euler';


describe('Euler', () => {
  it('should create an instance', () => {
    expect(new Euler(new Linear(), [0])).toBeTruthy();
  });


  describe('Testing the internal methods', () => {
    it('One step forward', () => {

      //Arrange
      const derivative = new Linear();
      const x0 = 4;

      //calculating manually the euler's step
      const euler = new Euler(derivative, [x0])
      const aux = x0 + euler.step * derivative.calculate(x0);

      //Act
      euler.stepFoward();

      //Assert
      expect(euler.getcurrentState()[0]).toBe(aux);
    });

    it('two step forward', () => {

      //Arrange
      const derivative = new Linear();
      const x0 = 4;

      //calculating manually the euler's step
      const euler = new Euler(derivative, [x0])

      let aux = x0 + euler.step * derivative.calculate(x0);
      aux = aux + euler.step * derivative.calculate(aux);

      //Act
      euler.forward(2 * euler.step);

      //Assert
      expect(euler.getcurrentState()[0]).toBe(aux);
    });


    fit('Simulation time should be equal real time when they are multiples', () => {

      //Arrange
      const derivative = new Linear();
      const x0 = 4;
      const euler = new Euler(derivative, [x0])
      const timespan = 2 * euler.step;


      //calculating manually the euler's step
      let aux = x0 + euler.step * derivative.calculate(x0);
      aux = aux + euler.step * derivative.calculate(aux);

      //Act      
      euler.forward(timespan);

      //Arrage
      const auxtime = euler.getTimeLog();

      //Assert
      expect(auxtime[auxtime.length - 1]).toBe(timespan);
    });



  });

});

