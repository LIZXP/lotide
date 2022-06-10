const countOnly = (allItems, itemsToCount) => {
  const newObj = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (newObj[item]) {
        newObj[item] += 1;
        // on the first run newObj will be emppty and will go to the else first
        // on the second run the newObj will have everything to 1 then plus 1
      } else {
        newObj[item] = 1;
        // on the first run will set everything equal to 1
      }
    }
  }
  return newObj;
};

module.exports = countOnly;
