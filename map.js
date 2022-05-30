const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const result = [];
  for (const ele of array) {
    result.push(callback(ele));
  }
  return result;
};

const results1 = map(words, (word) => word[0]);

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arrnum1, arrnum2) => {
  if (eqArrays(arrnum1, arrnum2)) {
    console.log(`💗💗💗 Assertion passed`);
  } else {
    console.log(`❌❌❌ Assertion failed)`);
  }
};

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
