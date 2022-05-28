const assertEqual = (actual, expected) => {
  console.assert(actual === expected, `❌❌❌ ${actual} != ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: 💚💚💚 ${actual} === ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
const findKeyByValue = (catlog, movName) => {
  for (const obj in catlog) {
    if (catlog[obj] === movName) {
      return obj;
    }
  }
  return undefined;
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
