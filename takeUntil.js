// take the input and find the key of that input then slice + 1
// const takeUntil = (array, callback) => {
//   const newArray = [];
//   for (const ele of array) {
//     array.slice(callback(0, Object.keys(ele)));
//   }
//   return array;
// };

const takeUntil = function (array, callback) {
  let newArray = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
