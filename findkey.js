const assertEqual = (actual, expected) => {
  console.assert(actual === expected, `❌❌❌ ${actual} != ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: 💚💚💚 ${actual} === ${expected}`);
  }
};

const findKey = (obj, func) => {
  for (const objkey in obj) {
    //use for...in loop get the key of the Object.
    if (func(obj[objkey])) {
      /* use obj[objkey] to access the star part. then the callback will
      pass it to the callback function and plus with x.star to access
      the item === 2.
    */
      return objkey;
      // then return the objkey which is noma so let it compare
      // the expected output.
    }
  }
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);
