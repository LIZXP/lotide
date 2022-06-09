const findKeyByValue = (catlog, movName) => {
  for (const obj in catlog) {
    if (catlog[obj] === movName) {
      return obj;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
