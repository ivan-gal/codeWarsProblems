"use strict";

function getMiddle(s) {
  let wordArray = s.split("");
  if (wordArray.length % 2 !== 0) {
    return wordArray[(wordArray.length - 1) / 2];
  } else {
    return (
      wordArray[wordArray.length / 2 - 1] + wordArray[wordArray.length / 2]
    );
  }
}

console.log(getMiddle("testing"));

console.log(getMiddle("test"));
