# Front

Frontend code of I Learn Smarter project - https://ilearnsmarter.com

## Issues

- when home is application X and we move to the other X with navigation

- Upgrade of Driver.js leaves it not working

## TODO

### als/die, der/die/das/den..,wenn/weil ChooseWordApp

```javascript
var flagFirst = mightyWhileDas("\s(dem|den|des|der|die|das)\s", $scope.question)
var flagSecond = mightyWhile("\s(eines|einen|einem|einer|eine|ein)\s", ('ein'), flagFirst)
var flagThird = mightyWhile("\s(meines|meinen|meinem|meiner|meine|mein)\s", ('mein'), flagSecond)
var flagFourth = mightyWhile("\s(deines|deinen|deinem|deiner|deine|dein)\s", ('dein'), flagThird)
var flagFifth = mightyWhile("\s(seines|seinen|seinem|seiner|seine|sein)\s", ('sein'), flagFourth)
var flagSixth = mightyWhile("\s(ihrem|ihren|ihres|ihrer|ihre|ihr)\s", ('ihr'), flagFifth)
var flagEighth = mightyWhile("\s(unserem|unseren|unseres|unserer|unsere|unser)\s", ('unser'), flagSixth)
var flagNinth = mightyWhile("\s(eurem|euren|eures|eurer|eurere|euer)\s", ('euer'), flagEighth)
```

- cram game alike

## Ignorable TODO

- redux log that specifies particular action.type

- all use base64

- learningmeme mobile app(custom keyboard containing all correct chars plus 5 that are not part of the answer)

- mobile learning meme implement own keyboard

- try react-fa https://github.com/andreypopp/react-fa

## Choose-word

- sentences with one letter words must be filtered out upon init

## Scripts explained

`
"devx": "jest src/_modules/filterSelectCase.spec.ts --watch",
"log": "node files/log",
"x": "tslint --fix --project tsconfig.json",
"y": "tsfmt -r",
"db": "node files/getDB",
"do": "node files/do",
"fix": "node node_modules/server-helpers/fix.js",
"build": "./node_modules/.bin/webpack --config webpack.config.prod.js&&node files/postBuild",
"e2e": "jest -c jest.config.json --testRegex \".+/.+e2e.spec.ts$\"",
"start": "node_modules/.bin/webpack-dev-server",
"test": "./node_modules/.bin/jest",
"lint": "tslint",
"format": "tsfmt",
"watch": "node files/watch",
"de": "commit"
`

### devx - Watch test file

### log - Start socket.io log server

It ignores all logs starting with REDUX.

It uses port 4000

### logx - Start socket.io log server

### x - Lint all src files

### y - Format all src files

### db - Generate database JSON file

### build - Webpack build process

### start - Webpack dev process

### watch - Watch src files

Lint/format is not applied every file change.

It waits for 3 different file changed and then it start lint/format.

### test - Run unit tests

### e2e - Run end-to-end tests

### fix - Append `is` typing to Jest definitions