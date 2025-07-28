const Calculator = require('../src/Calculator'); 

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('should subtract two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });
});