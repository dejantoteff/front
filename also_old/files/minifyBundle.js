const { minify } = require('minify')
const { resolve } = require('path')

const filePath = resolve(__dirname, '../dist/bundle.js')

minify({
  filePath: filePath,
  output: '_'
})