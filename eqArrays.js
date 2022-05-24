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


const assertEqual = (actual, expected) => {
  console.assert(actual === expected, `❌❌❌ ${actual} != ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: 💚💚💚 ${actual} === ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true);