class BuyOperation {
  constructor(data, calculator) {
    this.unitCost = data['unit-cost'];
    this.quantity = data.quantity;
    this.calculator = calculator;
  }

  calculateTax() {
    const totalCost = (this.calculator.avgPrice * this.calculator.totalQty) + (this.unitCost * this.quantity);
    this.calculator.totalQty += this.quantity;
    this.calculator.avgPrice = totalCost / this.calculator.totalQty;
    return { tax: 0.0 };
  }
}

module.exports = BuyOperation;
