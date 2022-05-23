
const head = (arr) => {
  return arr[0];
}
const assertEqual = (actual, expected) => {
  if(!actual){console.log(`Please dont use empty array.`)}
  else {console.assert(actual === expected, `❌❌❌ ${actual} != ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: 💚💚💚 ${actual} === ${expected}`);
  }
}
}
assertEqual(head([5,3,10]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");