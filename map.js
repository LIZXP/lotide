const map = function (array, callback) {
  const result = [];
  for (const ele of array) {
    result.push(callback(ele));
  }
  return result;
};

module.exports = map;
