const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const countOnly = (allItems, itemsToCount) => {
  const newObj = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (newObj[item]) {
        newObj[item] += 1;
      } else {
        newObj[item] = 1;
      }
    }
  }
  return newObj;
};

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});
console.log(result1);

// const countOnly = (allItems, itemsToCount) => {
//   const newObj = {};
//   for (const item of allItems) {
//     if (itemsToCount[item]) {
//       if (newObj[item]) { // {} => {}.Jason => null/undefined [First run]
//           //{Jason: 1} => {Jason: 1}.Jason => 1 => NOt null/undefined  [Second Run]
//         newObj[item] += 1;
//       } else {
//         newObj[item] = 1; // { Jason: 1 } [First Run]
//       }
//     }
//   }
//   return newObj;
// };
