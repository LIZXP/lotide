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
    console.log(`💗💗💗 Assertion passed: ${arrnum1} === ${arrnum2}`);
  } else {
    console.log(`❌❌❌ Assertion failed): ${arrnum1} !== ${arrnum2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 3, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 0], [1, 2, 3]);
