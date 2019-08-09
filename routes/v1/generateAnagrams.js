const cheerio = require("cheerio");
const request = require("request");

var url;
var options = {};

const generateAnagrams = (queriedWord, callback) => {
  url = `https://new.wordsmith.org/anagram/anagram.cgi?anagram=${queriedWord}&language=english&t=500&d=&include=&exclude=&n=&m=&a=y&l=n&q=y&k=0&source=adv`;
  url = encodeURI(url);

  options = {
    method: "GET",
    url: url,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0"
    }
  };

  request(options, function(err, response, body) {
    if (err) {
      return console.error(err);
    }

    const $ = cheerio.load(body);

    var word = $("div.p402_premium")
      .first()
      .text();
    var arr = word.match(/[0-9]+\.\s+[a-z]*/g);

    if (arr) {
      arr.forEach(function(part, index) {
        this[index] = part.replace(/[^A-Za-z]/g, "");
      }, arr);

      arr = arr.filter(v => v.length == queriedWord.length);
    } else {
      arr = [];
    }

    return callback(arr);
  });
};

module.exports = generateAnagrams;
