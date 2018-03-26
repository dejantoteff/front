const { resolve } = require('path')
const { readdirSync } = require('fs')
const { kebabCase } = require('string-fn')

const dir = resolve(__dirname, '../../src')

function getPaths(){

  return readdirSync(
    dir
  ).filter(
    x => x.includes('_') && !x.startsWith('_') && x !== 'root' && !x.includes('.')
  ).map(kebabCase)
}

exports.getPaths = getPaths