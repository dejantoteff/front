const { svg } = require('font-awesome-assets')
const {writeFileSync} = require('fs')

writeFileSync(`${__dirname}/fa.svg`, svg(process.argv[2], '#000'), 'utf8');