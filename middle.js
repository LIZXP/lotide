const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let loop1 of arr1) {
    for (let loop2 of arr2) {
      if (loop1 !== loop2) {
        return false;
      } else {
        return true;
      }
    }
  }
  
};


const assertArraysEqual = (arrnum1, arrnum2) => {
  if (eqArrays(arrnum1, arrnum2)) {
    console.log(`💗💗💗 Assertion passed`);
  } else {
    console.log(`❌❌❌ Assertion failed)`);
  }
};
/*
- determind if the length can be remined by 2, then determinds where the 2 number start and end, we need to sliced from the array.
- we will call the variable within the else statement to prevent the pollution.
- if not we will need to push the position of the Math.floor number of the array to the new array.
*/
const middle = (array) => {
  if(array.length < 2) {
    return array;
  } else if (array.length % 2 ===0){
    return array.slice([array[(array.length / 2)-1], array[(array.length/2)]]);
  } else {
    let newArr = [];
    let num = Math.floor(array.length / 2);
    newArr.push(array[num]);
    return newArr;
  }
}