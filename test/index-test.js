const assert = require('chai').assert;
const index = require('../index');

describe('#codeTests', function() {
  it('sumString returns the correct sum of a string of numbers', function() {
    let numbers = '02415';
    assert.equal(index.sumString(numbers), '12');
  });

  it('sumString should return a string', function() {
    let numbers = '123';
    let result = index.sumString(numbers);
    assert.typeOf(result, 'string');
  });

  it('sumArray should return the correct sum of elements in an array', function() {
    let numbers = [1, 2, 3];
    let result = index.sumArray(numbers);
    assert.equal(result, 6);
  });

  it('multiplyString returns the correct product of a string of numbers', function() {
    let numbers = '124';
    assert.equal(index.multiplyString(numbers), 8);
  });
});
