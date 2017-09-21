const { execCommand } = require("common-fn")
const watchFn = require("watch-fn")
const R = require("rambda")
const postCssFn = require("postcss-fn")
const log = require("log-fn")

const options = {
  timeout: 500,
  commands: {
    tsx: async filePath => {
      log("sep")
      console.log(filePath)
      // const result = await lintFn({filePath})
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
