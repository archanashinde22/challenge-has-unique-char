// Write your code below

function hasUniqueChars(word) {
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("Bob"));

// solution using set
function hasUniqueCharsSet(word) {
  let uniqueSet = new Set();
  for (let i = 0; i < word.length; i++) {
    uniqueSet.add(word[i]);
  }
  if (uniqueSet.size === word.length) {
    return true;
  } else {
    return false;
  }
}
console.log(hasUniqueCharsSet("Monday"));
console.log(hasUniqueCharsSet("Moonday"));
console.log(hasUniqueCharsSet("Bob"));

// Using  array as

const hasUniqueChars = (word) => {
  let hasUniqueChar = true;
  const array = [];
  for (let i = 0; i < word.length; i++) {
    if (!array.includes(word[i])) {
      array.push(word[i]);
    } else {
      hasUniqueChar = false;
    }
  }
  return hasUniqueChar;
};
