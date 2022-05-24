const tail = (arr) => {
  if (arr.length > 1) {
    for (const remain of arr.slice()) {
      return remain;
    }
  }
};
const assertEqual = (actual, expected) => {
  if (!actual) {
    console.log(`Please dont use empty array.`);
  } else {
    console.assert(actual === expected, `❌❌❌ ${actual} != ${expected}`);
    if (actual === expected) {
      console.log(`Assertion passed: 💚💚💚 ${actual} === ${expected}`);
    }
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!