const path = require('path')
const { watch } = require('server-helpers')

const projectDirectory = path.resolve(__dirname, '../')

watch({
  projectDirectory,
  label: 'front',
  limit: 7
})