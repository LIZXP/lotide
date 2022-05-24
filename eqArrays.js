
const eqArrays = (arr1,arr2) => {
  if (arr1.length !== arr2.length){
    return false;
  }
  return arr1.every((num) => arr2.includes(num));
  //use every to check if each value passed in for "num" is equal to the "num" passed in from arr2. in this method even the order is wrong it still get true. 
}



const assertEqual = (actual, expected) => {
  console.assert(actual === expected, `❌❌❌ ${actual} != ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: 💚💚💚 ${actual} === ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);