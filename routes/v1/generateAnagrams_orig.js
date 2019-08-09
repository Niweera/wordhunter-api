const generateAnagrams = (word, length) => {
  // Because of the recursive nature of this function
  // a separate length value is required in order to
  // compare with later so that we can know the difference
  // between mini anagram and full ones for real-time
  // logging. This value also allows you to generate smaller
  // anagrams.

  if (length) wordLength = length;
  if (word.length < 2) {
    return [word];
  } else {
    // By declaring all variables outside of the loop,
    // we improve efficiency, avoiding the needless
    // declarations each time.

    var anagrams = [];
    var before, focus, after;
    var shortWord, subAnagrams, newEntry;
    var i = 0;

    for (var i = 0; i < word.length; i++) {
      before = word.slice(0, i);
      focus = word[i];
      after = word.slice(i + 1, word.length + 1);
      shortWord = before + after;
      subAnagrams = generateAnagrams(shortWord);

      for (var j = 0; j < subAnagrams.length; j++) {
        newEntry = focus + subAnagrams[j];
        anagrams.push(newEntry);

        // Now we use this to log the results in real time, in order
        // to gets results quickly while allowing them to be processed
        // at a speed that web browsers can handle.

        //if (newEntry.length == wordLength) console.log(newEntry); // Console
      }
    }

    return anagrams;
  }
};

module.exports = generateAnagrams;
