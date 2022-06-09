/*
- determind if the length can be remined by 2, then determinds where the 2 number start and end, we need to sliced from the array.
- we will call the variable within the else statement to prevent the pollution.
- if not we will need to push the position of the Math.floor number of the array to the new array.
*/
const middle = (array) => {
  if (array.length < 2) {
    return array;
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    let newArr = [];
    let num = Math.floor(array.length / 2);
    newArr.push(array[num]);
    return newArr;
  }
};

module.exports = middle;
