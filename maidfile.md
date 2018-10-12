## hide

If there is marker `// DEV_ONLY`, then this scripts comments out the next line.

```bash
node files/devOnly --hide
```

## show

If there is marker `// DEV_ONLY`, then this scripts comments in the next line.

```bash
node files/devOnly --show
```

## log

Starts `socket.io` server that logs `redux` and standard `console.log` client calls.

```bash
node files/log
```

## x

Lint current project with `tslint`

```bash
tslint --fix --project tsconfig.json
```

## y

Format current project with `tsfmt`

```bash
tsfmt -r --no-tsconfig src/*.ts
```

## dn

Updates current database json with cloud `pouch` database

```bash
node files/getDB
```

## do

Utility for faster component/epic creation

```bash
node files/do
```

## dox

Create Javascript helper file and spec

```bash
NODE_ENV=test node files/do
```

## webpack

Webpack production build

```bash
./node_modules/.bin/webpack --config webpack.config.prod.js
```

## build

Full build pipeline

```bash
node files/seo&&maid hide&&maid webpack&&node files/postBuild
```

## e2e

Run e2e tests. 
TODO: use `e2e.js` pattern

```bash
jest -c jest.config.json --testRegex \".+/.+e2e.spec.ts$\"
```

## devserver

Dev server

```bash
node_modules/.bin/webpack-dev-server --open
```

## start

Start working

```bash
maid hide&&maid devserver
```

## startx

Start working and enable `socket.io` sending of the browser's log.

```bash
maid show&&maid devserver
```

## test

Run unit tests

```bash
jest
```

## watch

Lint and format files upon file change.
In fact it waits for change of `currentPathHolder` to start linting.

```bash
node files/watch
```

## de

```bash
commit
```