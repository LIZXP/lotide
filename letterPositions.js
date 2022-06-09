// loop the sentence.
// find and loop for the key position. as [i]
// test true or false with results{} then push the position

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    /* loop using this C style loop to find both letter
    and position of the letter [i]
    */
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        //We set the if statement by false is to got the postion into array in the first run.
        results[sentence[i]] = [i];
      } else {
        /*then after the basic array set in the first run, then we can push the addition position of that letter to the object.
         */
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;
