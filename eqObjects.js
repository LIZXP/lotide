const assertEqual = (actual, expected) => {
  console.assert(actual === expected, `❌❌❌ ${actual} != ${expected}`);
  if (actual === expected) {
    console.log(`Assertion passed: 💚💚💚 ${actual} === ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  const objectKey1 = Object.keys(object1);
  const objectKey2 = Object.keys(object2);

  if (objectKey1.length !== objectKey2.length) {
    return false;
  } else {
    for (const key of objectKey1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
        return true;
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
