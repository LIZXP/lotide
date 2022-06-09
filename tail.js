const tail = (arr) => {
  if (arr.length > 1) {
    return arr.slice(1);
  }
  return arr;
};

module.exports = tail;
