import { Linear } from './linear';

describe('Linear', () => {
  it('should create an instance', () => {
    expect(new Linear()).toBeTruthy();
  });

  it('should create an instance from given parameter to constructor, and store the parameter', () => {
    expect(new Linear(2).alfa).toBe(2);
  });

  it('should return values in a straight line with inclination equal to alfa', () => {
    expect(new Linear(2).calculate(2)).toBe(4);
  });

});
