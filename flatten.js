/*
  -Loop the first array [sloved]
  -use Array.isArray to identify if array contain array [solved]
  -push everything to new array [solved]
*/

const flatten = (arr1) => {
  let newArray = [];
  for (let firstLoop of arr1) {
    if (Array.isArray(firstLoop)) {
      for (sndLoop of firstLoop) {
        newArray.push(sndLoop);
      }
    } else {
      newArray.push(firstLoop);
    }
  }
  return newArray;
};

module.exports = flatten;
