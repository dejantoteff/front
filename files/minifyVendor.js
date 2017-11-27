const { minify } = require('minify')
const { resolve } = require('path')
const { readdirSync } = require('fs')
const R = require('rambdax')

const dirPath = resolve(__dirname, '../dist')

const vendorPath = R.compose(
  x => resolve(__dirname, `../dist/${x}`),
  R.head,
  R.filter(R.startsWith('vendor-'))
)(readdirSync(dirPath))

minify({
  filePath: vendorPath,
  output: '_'
})