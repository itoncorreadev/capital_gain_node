const OperationFactory = require('./operationFactory');

class Calculator {
  constructor() {
    this.avgPrice = 0.0;
    this.totalQty = 0;
    this.accumulatedLoss = 0.0;
  }

  calculate(operations) {
    return operations.map(data => {
      let operation = OperationFactory.build(data, this);
      return operation.calculateTax();
    });
  }
}

module.exports = Calculator;
