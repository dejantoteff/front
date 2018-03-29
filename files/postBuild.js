const fs = require('fs-extra')
const path = require('path')
const {log} = require('log')
const {editHTML} = require('./_helpers/editHTML')
const {minify} = require('./_helpers/minify')

log('minify start','info')
minify()
log('minify end', 'success')

editHTML()

const resolve = relativePath => path.resolve(__dirname, relativePath)

log('move start','info')
const dist = resolve('../dist')

/**
 * move `./dist` folder to `server/public`
 */
const serverPublic = resolve('../../server/dist/public')
fs.removeSync(serverPublic)
fs.copySync(dist, serverPublic, {overwrite: true })

/**
 * Move index.html to `server/views` folders
 */
const indexHTML = resolve('../../server/dist/public/index.html')
const serverEJS = resolve('../../server/dist/views/index.ejs')
const serverSrcEJS = resolve('../../server/src/views/index.ejs')

fs.copySync(indexHTML, serverEJS, {overwrite: true })
fs.copySync(indexHTML, serverSrcEJS, {overwrite: true })

/**
 * Move favicon
 */
const favicon = resolve('./favicon.ico')
const serverFavicon = resolve('../../server/dist/public/favicon.ico')

fs.copySync(favicon, serverFavicon, {overwrite: true })

log('move end', 'success')