/*
- loop through the first array. [sloved]
- if the 2nd array includes the same value from the first array remove it. [sloved]
- push the remaining value into new array. [sloved]
*/

const without = (arr1,arr2) => {
  let newArr = [];
  for (let i=0; i<arr1.length; i++){
    //checked if arry1 includes the value on array2
    // then push the new !== value to the new array 
    if (!arr2.includes(arr1[i])){
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

console.log(words);
console.log(without(words, ["lighthouse"]))