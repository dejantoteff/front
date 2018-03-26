const { minify: minifyModule } = require('minify')
const { resolve } = require('path')
const { readdirSync } = require('fs')

const dir = resolve(__dirname, '../../dist')

function minify(){

  return readdirSync(
    dir
  ).filter(
    x => x.endsWith('.js')
  ).forEach(x => {
    minifyModule({
      filePath : `${dir}/${x}`,
      output   : '_'
    })
  })
}

exports.minify = minify