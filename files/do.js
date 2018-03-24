const {doModule} = require('../../do/dist/')
const {resolve} = require('path')

doModule({
  mode:'REACT',
  srcDirectory: resolve(__dirname, '../src'),
  packageJson: resolve(__dirname, '../package.json')
})