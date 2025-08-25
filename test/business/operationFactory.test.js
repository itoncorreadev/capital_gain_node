const OperationFactory = require('../../app/business/operationFactory');
const Calculator = require('../../app/business/calculator');
const BuyOperation = require('../../app/business/operations/buyOperation');
const SellOperation = require('../../app/business/operations/sellOperation');

describe('OperationFactory', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('returns BuyOperation instance for "buy"', () => {
    const op = OperationFactory.build({ operation: 'buy', 'unit-cost': 10, quantity: 100 }, calculator);
    expect(op).toBeInstanceOf(BuyOperation);
  });

  it('returns SellOperation instance for "sell"', () => {
    const op = OperationFactory.build({ operation: 'sell', 'unit-cost': 20, quantity: 100 }, calculator);
    expect(op).toBeInstanceOf(SellOperation);
  });

  it('throws error for unknown operation type', () => {
    expect(() => {
      OperationFactory.build({ operation: 'unknown', 'unit-cost': 10, quantity: 100 }, calculator);
    }).toThrow('Unknown operation type');
  });
});
