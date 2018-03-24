# Front

Frontend code of I Learn Smarter project - https://ilearnsmarter.com

## Issues

- when home is application X and we move to the other X with navigation

- Upgrade of Driver.js leaves it not working

## TODO

### als/die, der/die/das/den..,wenn/weil ChooseWordApp

### cram game alike

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
"devx": "jest src/_modules/filterSelectArticle.spec.ts --watch",
"dev": "jest src/_modules/filterSelectArticle.spec.ts",
"log": "node files/log",
"hide": "node files/devOnly --hide",
"unhide": "node files/devOnly --show",
"x": "tslint --fix --project tsconfig.json",
"y": "tsfmt -r --no-tsconfig src/*.ts",
"db": "node files/getDB",
"do": "node files/do",
"fix": "node node_modules/server-helpers/fix.js",
"webpack": "./node_modules/.bin/webpack --config webpack.config.prod.js",
"build": "yarn webpack&&node files/postBuild",
"e2e": "jest -c jest.config.json --testRegex \".+/.+e2e.spec.ts$\"",
"devserver": "node_modules/.bin/webpack-dev-server",
"start": "yarn hide&&yarn devserver",
"startx": "yarn unhide&&yarn devserver",
"test": "./node_modules/.bin/jest",
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