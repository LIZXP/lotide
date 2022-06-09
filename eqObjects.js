const eqArrays = require("../lotide/eqArrays");

const eqObjects = function (object1, object2) {
  const objectKey1 = Object.keys(object1);
  const objectKey2 = Object.keys(object2);
  // call the variable so we can keep the coding easy to understand.
  if (objectKey1.length !== objectKey2.length) {
    //check the [key] length of the object passing in are the same.
    return false;
  } else {
    for (const key of objectKey1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //check if there is array within the object.
        if (!eqArrays(object1[key], object2[key])) {
          //callback the eqArray function and loop the array and compare both of them, if they are not matching then return false.
          return false;
        }
        //if the array within both of the object are the same, then return true.
        return true;
      } else if (object1[key] !== object2[key]) {
        //if there is no array within each of the object passing in then simply compare the item of each key, not equal return false.
        return false;
      }
    }
    return true;
    // after run all the falsey check then the rest return true.
  }
};

module.exports = eqObjects;
