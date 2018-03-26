const {resolve} = require('path')
const {replace} = require('rambdax')
const {readFileSync, writeFileSync} = require('fs')

const LOCATION = resolve(
  __dirname,
  '../../dist/index.html'
)

const PRELOAD = '<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>'
const HEAD = '</head>'

function editHTML(){
  const html = readFileSync(LOCATION).toString()
  
  const cleaner = replace(
    / type=\"text\/javascript"/g,
    '',
    html
  )

  const newHTML = replace(
    HEAD,
    `${PRELOAD}${HEAD}`,
    cleaner
  )

  writeFileSync(
    LOCATION,
    newHTML
  )
}

exports.editHTML = editHTML