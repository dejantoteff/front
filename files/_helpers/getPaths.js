const { resolve } = require('path')
const { readdirSync } = require('fs')
const { kebabCase } = require('string-fn')
const { idHolder } = require('./idHolder')

const dir = resolve(__dirname, '../../src')

function getPaths(){

  const apps = readdirSync(
    dir
  ).filter(
    x => x.includes('_') && !x.startsWith('_') && x !== 'root' && !x.includes('.')
  ).map(kebabCase)

  return [...apps, ...idHolder]
}

exports.getPaths = getPaths