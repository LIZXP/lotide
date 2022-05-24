const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let loop1 of arr1) {
    for (let loop2 of arr2) {
      if (loop1 !== loop2) {
        return false;
      } else {
        return true;
      }
    }
  }
  
};


const assertArraysEqual = (arrnum1, arrnum2) => {
  if (eqArrays(arrnum1, arrnum2)) {
    console.log(`💗💗💗 Assertion passed`);
  } else {
    console.log(`❌❌❌ Assertion failed)`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 3, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 0], [1, 2, 3]);
