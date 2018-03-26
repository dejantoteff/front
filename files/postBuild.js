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
const sourcePublic = resolve('../dist')

const outputPublic = resolve('../../server/dist/public')
fs.copySync(sourcePublic, outputPublic, {overwrite: true })

const sourceIndex = resolve('../../server/dist/public/index.html')

const outputIndex = resolve('../../server/dist/views/index.ejs')
const outputSrcIndex = resolve('../../server/src/views/index.ejs')

fs.copySync(sourceIndex, outputIndex, {overwrite: true })
fs.copySync(sourceIndex, outputSrcIndex, {overwrite: true })

log('move end', 'success')