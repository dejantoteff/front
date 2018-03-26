const {resolve} = require('path')
const {replace} = require('rambdax')
const {readFileSync, writeFileSync} = require('fs')

const LOCATION = resolve(
  __dirname,
  '../../dist/index.html'
)

function editHTML(){
  const html = readFileSync(LOCATION).toString()
  const newHTML = replace(
    / type=\"text\/javascript"/g,
    '',
    html
  )

  writeFileSync(
    LOCATION,
    newHTML
  )
}

exports.editHTML = editHTML
