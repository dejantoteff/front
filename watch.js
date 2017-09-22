const log = require('log-fn')
const postCssFn = require('postcss-fn')
const R = require('rambda')
const watchFn = require('watch-fn')
const { execCommand } = require('common-fn')

const typescriptFn = async filePath => {
  if (flag === false) {
    return
  }
  flag = false
  log('tslint', filePath, 'r30.info')
  await execCommand(`tslint ${ filePath } --fix`)
  flag = true
  log('done', 'success')
}

let flag = true

const options = {
  timeout  : 500,
  commands : {
    tsx  : typescriptFn,
    ts   : typescriptFn,
    pcss : async filePath => {
      log(`postCss ${ filePath }`, 'box')
      const options = {
        filePath : filePath,
        output   : R.replace('.pcss', '.css', filePath),
        options  : { cssnano : false },
      }
      await postCssFn(options)
      log('done', 'success')
    },
  },
}

watchFn.start(options)
