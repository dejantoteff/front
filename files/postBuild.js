const path = require('path')
const { editHTML } = require('./_helpers/editHTML')
const { emptyDirSync, copySync } = require('fs-extra')
const { log } = require('log')
const { minify } = require('./_helpers/minify')

log('minify start', 'info')
// minify()
log('minify end', 'success')

editHTML()

const resolve = relativePath => path.resolve(__dirname, relativePath)

log('move start', 'info')

/**
 * move `./dist` folder to `server/public`
 */
const serverPublic = resolve('../../server/src/public')
emptyDirSync(serverPublic)

const dist = resolve('../dist')
const seo = resolve('../files/seo')
copySync(dist, seo, { overwrite : true })

/**
 * Move favicon
 */
const favicon = resolve('./favicon.ico')
const seoFavicon = resolve('../files/seo/favicon.ico')
copySync(favicon, seoFavicon, { overwrite : true })

/**
 * Move seo
 */
copySync(seo, serverPublic, { overwrite : true })

/**
 * Move index.html to `server/views` folders
 */
const indexHTML = resolve('../../server/src/public/index.html')
const serverEJS = resolve('../../server/src/views/index.ejs')

copySync(indexHTML, serverEJS, { overwrite : true })

log('move end', 'success')
