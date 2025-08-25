const fs = require('fs');
const Calculator = require('../app/business/calculator');

const files = process.argv.slice(2);

files.forEach(filename => {
  try {
    const rawData = fs.readFileSync(filename, 'utf-8');
    const operations = JSON.parse(rawData);
    const calculator = new Calculator();
    const result = calculator.calculate(operations);
    console.log(JSON.stringify(result));
  } catch (err) {
    console.error(`Erro ao processar ${filename}: ${err.message}`);
  }
});
