const sumString = str => {
  return str
    .split('')
    .reduce((a, b) => {
      return +a + +b;
    })
    .toString();
};

const sumArray = array => {
  return array.reduce((a, b) => {
    return a + b;
  });
};

const multiplyString = str => {
  return str.split('').reduce((a, b) => {
    return a * b;
  });
};

//don't code below this line...
module.exports.sumString = sumString;
module.exports.multiplyString = multiplyString;
module.exports.sumArray = sumArray;
