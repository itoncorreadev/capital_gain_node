const BuyOperation = require('./operations/buyOperation');
const SellOperation = require('./operations/sellOperation');

class OperationFactory {
  static build(data, calculator) {
    switch (data.operation) {
      case 'buy':
        return new BuyOperation(data, calculator);
      case 'sell':
        return new SellOperation(data, calculator);
      default:
        throw new Error(`Unknown operation type: ${data.operation}`);
    }
  }
}

module.exports = OperationFactory;
