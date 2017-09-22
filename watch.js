const { execCommand } = require("common-fn")
const watchFn = require("watch-fn")
const R = require("rambda")
const postCssFn = require("postcss-fn")
const log = require("log-fn")

let flag = true

const options = {
  timeout: 500,
  commands: {
    tsx: async filePath => {
      if(flag === false){
        return
      }
      flag = false
      log("sep")
      console.log(filePath)
      await execCommand(`tslint ${filePath} --fix`)
      flag = true
      log('done','success')
    },
    pcss: async filePath => {
      log(`postCss ${filePath}`,"box")
      const options = {
        filePath: filePath,
        output: R.replace(".pcss",".css",filePath),
        options: {cssnano: false}
      }
      await postCssFn(options)
      log('done','success')
    }
  }
}

watchFn.start(options)
