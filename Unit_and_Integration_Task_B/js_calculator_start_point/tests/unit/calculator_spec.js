var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should get 5 from addition 1 + 4', function(){
    calculator.previousTotal = 1
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5)
  })


  it('should get 3 from subtraction 7 - 4', function(){
    calculator.previousTotal = 7
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3)
  })


  it('should get 15 from multiplication 3 * 5', function(){
    calculator.previousTotal = 3
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('should get 3 from division 21 / 7', function(){
    calculator.previousTotal = 21
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('should concatenate numberClicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 123);
  })

  it('should be able to chain multiple operators together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should clear runningTotal without affecting the calculation', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');

    calculator.clearClick();

    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 4);
  })

});
