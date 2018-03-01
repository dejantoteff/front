const path = require('path')
const watchFn = require('watch-fn')
const { exec, spawn } = require('child_process')
const { lastUsed } = require('last-used')
const { log } = require('log')
const { replace } = require('rambdax')

lastUsed('front')

const projectDirectory = path.resolve(__dirname, '../')

//As we have numerous operations
//watch.timeout option is not a good fit.

let flag = true

const execCommand = command =>
  new Promise((resolve, reject) => {
    const proc = exec(command, { cwd : projectDirectory })

    proc.stdout.on('data', chunk => {
      console.log(chunk.toString())
    })
    proc.stdout.on('end', () => resolve())
    proc.stdout.on('error', err => reject(err))
  })

  const tslintFn = async filePath => {
    await execCommand(`yarn lint ${ filePath } --fix`)
    log(`1. Tslint ${ filePath } ready`, 'info')
  }
    
  const tsFormatFn = async filePath => {
    await execCommand(`yarn format -r ${ filePath }`)
    log('2.1 tsFormatFn ready', 'info')
  }
  
  const typeCheckFn = async () => {
    await execCommand('yarn lint --project tsconfig.json')
    log('2.2 Typecheck ready','success')
  }
  
  async function tsCommand(filePath){
    if(flag === false){
      
      return
    }
    flag = false
    
    await tslintFn(filePath)
    await Promise.all([
      tsFormatFn(filePath),
      typeCheckFn(filePath)
    ])
    flag = true
    log('','sepx')
  }
  

const options = {
  commands : {
    ts : tsCommand,
    tsx : tsCommand,
  },
  directory : `${ projectDirectory }/src`,
  cwd       : projectDirectory,
  logFn     : () => {},
}

watchFn.start(options)

exports.execCommand = execCommand