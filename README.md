[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HitCount](http://hits.dwyl.io/Niweera/wordhunter-api.svg)](http://hits.dwyl.io/Niweera/wordhunter-api)
[![Known Vulnerabilities](https://snyk.io//test/github/Niweera/wordhunter-api/badge.svg?targetFile=package.json)](https://snyk.io//test/github/Niweera/wordhunter-api?targetFile=package.json)
![GitHub issues](https://img.shields.io/github/issues/Niweera/wordhunter-api)
![Website](https://img.shields.io/website/https/wh.niweera.gq?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online)
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
[![Build Status](https://travis-ci.com/Niweera/wordhunter-api.svg?branch=master)](https://travis-ci.com/Niweera/wordhunter-api)

# WordHunter-API v1.0

## WordHunter-API is live on https://wh.niweera.gq

> WordHunter lets you to find the words for the letters you have when you are playing Scrabble.

The following is the basic architecture of the WordHunter application. (The web application will use the WordHunter-API to get the results according to the letters that the user has given.)

![](w.png)

### Example use case

User wants to find words which can be created from `a, s, d`

The WordHunter service will provide the following results.

1. sad - Feeling or showing sorrow; unhappy.
2. ads - An advertisement.

(The initial version would only give the words which contains all the letters. Later versions would provide all the letter combinations.)

## Endpoints

Enter any combination of letters without the need of seperating them by a comma or a space.

Eg. `https://wh.niweera.gq/asd`, will return an array of all the possible words and their definitions that can be created using all the given letters.

```json
[
  {
    "word": "ads",
    "definition": "An advertisement."
  },
  {
    "word": "sad",
    "definition": "Feeling or showing sorrow; unhappy."
  }
]
```

### Paths

| Location  | Endpoint                 |
| :-------- | :----------------------- |
| Root path | `https://wh.niweera.gq/` |

### HTTP request and query methods

| Method | Endpoint | Query                  | Description                                                | Examples                           |
| :----- | :------- | :--------------------- | :--------------------------------------------------------- | :--------------------------------- |
| `GET`  | `/`      | `{letter combination}` | Give JSON response of all possible words with definitions. | [`asd`](https://wh.niweera.gq/asd) |

## Meta

Nipuna Weerasekara – [@Niweera](https://twitter.com/Niweera) – w.nipuna@gmail.com

Distributed under the MIT license. See `LICENSE` for more information.

[https://github.com/Niweera/wordhunter-api](https://github.com/Niweera/wordhunter-api)

The front-end for this application is in [wordhunter](https://github.com/Niweera/wordhunter) repo.

This repo is a part of `WordHunter` project.

`WordHunter` uses [GoogleDict](https://dict.niweera.gq) Dictionary API service. Find its repo [here](https://github.com/Niweera/googledict).

## Contributing

1. Fork it (<https://github.com/Niweera/wordhunter-api/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
