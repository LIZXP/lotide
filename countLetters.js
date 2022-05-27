const countLetters = (string) => {
  const newObj = {};
  for (const letter of string) {
    if (letter === " ") {
      //skip the space first using continue.
      continue;
    } else if (letter === letter) {
      // loop letter is equal to loop letter.
      if (newObj[letter]) {
        //first run will be false [second run will + 1 when see the letter].
        newObj[letter] += 1;
      } else {
        // first run will give every letter equal to 1.
        newObj[letter] = 1;
      }
    }
  }
  return newObj;
};

console.log(countLetters("lighthouse in the house"));
