const fs = require('fs-extra')
const path = require('path')

const resolve = relativePath => path.resolve(__dirname, relativePath)

const sourcePublic = resolve('../dist')

const outputPublic = resolve('../../server/dist/public')
fs.copySync(sourcePublic, outputPublic, {overwrite: true })

const sourceIndex = resolve('../../server/dist/public/index.html')

const outputIndex = resolve('../../server/dist/views/index.ejs')
const outputSrcIndex = resolve('../../server/src/views/index.ejs')

fs.copySync(sourceIndex, outputIndex, {overwrite: true })
fs.copySync(sourceIndex, outputSrcIndex, {overwrite: true })

console.log('done')