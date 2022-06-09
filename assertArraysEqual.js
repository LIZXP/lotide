const eqArrays = require("./eqArrays");

const assertArraysEqual = (arrnum1, arrnum2) => {
  if (eqArrays(arrnum1, arrnum2)) {
    console.log(`💗💗💗 Assertion passed: ${arrnum1} === ${arrnum2}`);
  } else {
    console.log(`❌❌❌ Assertion failed): ${arrnum1} !== ${arrnum2}`);
  }
};

module.exports = assertArraysEqual;
