const fs = require('fs-extra')
const path = require('path')

const sourcePublic = path.resolve(__dirname, '../dist')
const sourceIndex = path.resolve(__dirname, '../dist/index.html')

const outputPublic = path.resolve(__dirname, '../../server/dist/public')
const outputIndex = path.resolve(__dirname, '../../server/dist/views/index.ejs')

const outputSrcIndex = path.resolve(__dirname, '../../server/src/views/index.ejs')

fs.copySync(sourcePublic, outputPublic, {overwrite: true })
fs.copySync(sourceIndex, outputIndex, {overwrite: true })

fs.copySync(sourceIndex, outputSrcIndex, {overwrite: true })

console.log('done')