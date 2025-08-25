const SellOperation = require('../../../app/business/operations/sellOperation');
const Calculator = require('../../../app/business/calculator');

describe('SellOperation', () => {
  let calculator;
  let data;

  beforeEach(() => {
    calculator = new Calculator();
    data = { operation: 'sell', 'unit-cost': 20, quantity: 100 };
    calculator.avgPrice = 10;
    calculator.totalQty = 100;
  });

  it('should calculate tax correctly for profit', () => {
    const op = new SellOperation(data, calculator);
    expect(op.calculateTax()).toEqual({ tax: 0 });
  });

  it('should reduce total quantity after sell', () => {
    const op = new SellOperation(data, calculator);
    op.calculateTax();
    expect(calculator.totalQty).toBe(0);
  });

  it('should accumulate losses for negative profit', () => {
    calculator.avgPrice = 30;
    const op = new SellOperation(data, calculator);
    op.calculateTax();
    expect(calculator.accumulatedLoss).toBe(-1000);
  });
});
