const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const generateAnagrams = require("./generateAnagrams.js");
const _ = require("lodash");
global.Headers = fetch.Headers;

// @route   GET /
// @desc    Root endpoint for API v1
// @access  Public
router.get("/", (req, res) => {
  res.send(
    JSON.stringify({
      error: "No characters are given!",
      endpoint: "https://wh.niweera.gq/{letters}",
      note: "Just enter the letters. No need for spaces, commas etc."
    })
  );
});

// @route   GET /:letters
// @desc    Get the input characters & return probable words
// @access  Public
router.get("/:letters", (req, res) => {
  const letters = req.params.letters;
  var letterArray = letters.replace(/[^A-Za-z]/g, "");
  if (letterArray.length > 7) {
    res.status(404).json({
      error: "The maximum number of characters must be no more than 7 letters."
    });
  }
  if (
    !letterArray.includes("a") &&
    !letterArray.includes("e") &&
    !letterArray.includes("i") &&
    !letterArray.includes("o") &&
    !letterArray.includes("u")
  ) {
    res.status(404).json({
      error: "You can't possibly create a word with the given letters."
    });
  }

  var anagramWords = generateAnagrams(letterArray, letterArray.length);
  console.log(anagramWords);

  Promise.all(
    anagramWords.map(word =>
      // fetch(`https://dict.niweera.gq/wh/${word}`).then(res => res.json())
      fetch(`http://localhost:8080/${word}`).then(res => res.json())
    )
  )
    .then(values => {
      res
        .status(200)
        .json(_.uniqBy(values.filter(v => !v.hasOwnProperty("error")), "word"));
    })
    .catch(error => res.status(404).json(error));
});

// @route   GET /*
// @desc    Return 404 for all unidentified routes
// @access  Public
const fourNaughtFour = {
  error: "Invalid Endpoint!",
  endpoint: "https://wh.niweera.gq/{letters}",
  note: "Just enter the letters. No need for spaces, commas etc."
};
router.get("*", function(req, res) {
  res.status(404).json(fourNaughtFour);
});

module.exports = router;
