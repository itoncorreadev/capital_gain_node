const Calculator = require('../../app/business/calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should return 0 tax for buy operations', () => {
    const result = calculator.calculate([{ operation: 'buy', 'unit-cost': 10, quantity: 100 }]);
    expect(result[0].tax).toBe(0);
  });

  it('should calculate tax correctly for a sell above 20k', () => {
    const ops = [
      { operation: 'buy', 'unit-cost': 10, quantity: 10000 },
      { operation: 'sell', 'unit-cost': 20, quantity: 5000 },
    ];
    const result = calculator.calculate(ops);
    expect(result[1].tax).toBe(10000);
  });

  it('should return 0 tax for sell below 20k', () => {
    const ops = [
      { operation: 'buy', 'unit-cost': 10, quantity: 100 },
      { operation: 'sell', 'unit-cost': 20, quantity: 100 },
    ];
    const result = calculator.calculate(ops);
    expect(result[1].tax).toBe(0);
  });

  it('should correctly deduct accumulated loss', () => {
    const ops = [
      { operation: 'buy', 'unit-cost': 10, quantity: 10000 },
      { operation: 'sell', 'unit-cost': 5, quantity: 5000 },
      { operation: 'sell', 'unit-cost': 25, quantity: 5000 },
    ];
    const result = calculator.calculate(ops);
    expect(result[1].tax).toBe(0);
    expect(result[2].tax).toBeGreaterThan(0);
  });
});
