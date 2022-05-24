/*
- use nested array to loop [0] and [1]
-compare both value
*/

const eqArrays = (arr1,arr2) => {
  return arr1.toString() === arr2.toString();
}



const assertEqual = (actual, expected) => {
  console.assert(actual === expected, `❌❌❌ ${actual} != ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: 💚💚💚 ${actual} === ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);