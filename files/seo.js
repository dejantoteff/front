const {resolve} = require('path')
const {readFileSync} = require('fs')
const {pluck, prop} = require('rambdax')

const dbLocation = `${__dirname}/db.json`
const rows = JSON.parse(readFileSync(dbLocation).toString()).rows
const dbRaw = pluck('doc', rows)
const db = dbRaw.filter(prop('imageSrc'))

void function main(){
  let a = db[0]
  let c
}()

function parseSingleInstance(){}