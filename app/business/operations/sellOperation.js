class SellOperation {
  constructor(data, calculator) {
    this.unitCost = data['unit-cost'];
    this.quantity = data.quantity;
    this.calculator = calculator;
  }

  calculateTax() {
    const totalValue = this.unitCost * this.quantity;
    const profit = (this.unitCost - this.calculator.avgPrice) * this.quantity;
    let tax = 0.0;

    if (profit < 0) {
      this.calculator.accumulatedLoss += profit;
    } else {
      const adjustedProfit = profit + this.calculator.accumulatedLoss;
      if (adjustedProfit > 0 && totalValue > 20000) {
        tax = parseFloat((adjustedProfit * 0.2).toFixed(2));
      }
      this.calculator.accumulatedLoss = Math.min(0, adjustedProfit);
    }

    this.calculator.totalQty -= this.quantity;
    return { tax };
  }
}

module.exports = SellOperation;
