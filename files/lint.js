const klawSync = require('klaw-sync')
const LINT_FOLDER_IGNORES = 'node_modules,.git,dist,.idea,.vscode,bundle.js'
const {
  path,
  debug,
  any,
  compose,
  map,
  prop,
  filter
} = require('rambdax')
const { resolve, basename } = require('path')
const { execCommand } = require('./watch')

const allowedFileEndings = [
  '.js',
  '.ts',
  '.tsx',
]

const filterAllowed = x => any(
  fileEnding => x.path.endsWith(fileEnding),
  allowedFileEndings
)

async function lintFolder () {
  try {
    const allFiles = klawSync(
      resolve(__dirname, '../src'),
      {
        ignore : `{${ LINT_FOLDER_IGNORES }}`,
        nodir  : false,
      }
    )
    const allowedFiles = compose(
      map(prop('path')),
      filter(filterAllowed)
    )(allFiles)

    for (const filePath of allowedFiles) {
      if (filePath.endsWith('.ts')) {
        console.log('TS',filePath)
        await execCommand(`tslint ${ filePath } --fix`)
        await execCommand(`tsfmt -r ${ filePath }`)
      } else {
        console.log('TSX',basename(filePath))
      }
    }
  } catch (err) {
    debug(err)
  }
}

lintFolder()