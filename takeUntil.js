const takeUntil = function (array, callback) {
  let newArray = [];
  for (let element of array) {
    if (callback(element)) {
      // when the callback function return true, means the callback see the break point then break;
      break;
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};

module.exports = takeUntil;
