const fs = require('fs-extra')
const path = require('path')

const sourcePublic = path.resolve(__dirname, '../dist')

const outputPublic = path.resolve(__dirname, '../../server/dist/public')
fs.copySync(sourcePublic, outputPublic, {overwrite: true })

const sourceIndex = path.resolve(__dirname, '../../server/dist/public/index.html')
// const sourceIndex = path.resolve(__dirname, '../dist/index.html')

const outputIndex = path.resolve(__dirname, '../../server/dist/views/index.ejs')
const outputSrcIndex = path.resolve(__dirname, '../../server/src/views/index.ejs')

fs.copySync(sourceIndex, outputIndex, {overwrite: true })
fs.copySync(sourceIndex, outputSrcIndex, {overwrite: true })

console.log('done')