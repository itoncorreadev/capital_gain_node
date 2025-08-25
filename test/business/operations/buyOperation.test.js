const BuyOperation = require('../../../app/business/operations/buyOperation');
const Calculator = require('../../../app/business/calculator');

describe('BuyOperation', () => {
  let calculator;
  let data;

  beforeEach(() => {
    calculator = new Calculator();
    data = { operation: 'buy', 'unit-cost': 10, quantity: 100 };
  });

  it('should return tax 0 for buy operation', () => {
    const op = new BuyOperation(data, calculator);
    expect(op.calculateTax()).toEqual({ tax: 0 });
  });

  it('should update avg price and total quantity correctly', () => {
    const op = new BuyOperation(data, calculator);
    op.calculateTax();
    expect(calculator.totalQty).toBe(100);
    expect(calculator.avgPrice).toBe(10);
  });
});
