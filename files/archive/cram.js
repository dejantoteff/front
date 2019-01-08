const { get } = require('axios')
const { writeFileSync } = require('fs')
const { pascalCase } = require('string-fn')
const { path, ok, pluck, filter,pick,  s, map } = require('rambdax')
s()

const dbBase = 'https://rawcdn.githack.com/selfrefactor/front'
const dbTail = 'e9f0c5eb4900460d7b4891acd6a5b762ee1582fa/files/db.json'
const DB_URL = `${dbBase}/${dbTail}`
const SEP = ','

async function cram(from, to){
  ok(from,to)(['bg','en','de'])
  const outputKey = pascalCase(`${from}.${to}`)
  const OUTPUT = `${__dirname}/cram${outputKey}.txt`

  const response = await get(DB_URL)

  const cramData = path('data.rows', response)
    .s(pluck('doc'))
    .s(
      filter(x => {
        if([from,to].includes('bg') === false) return true

        return x.bgWord && x.bgWord.length > 0
      })
    )
    .s(map(pick(`${from}Word,${to}Word`)))
    .s(map(
      x => `${x[`${from}Word`]}${SEP}${x[`${to}Word`]}`)
    )
    // ISSUE as it should be any such instances
    // ============================================
    .s(filter(x => x !== SEP))
    .s(x => x.join('\n'))
  
  writeFileSync(OUTPUT, cramData)  
}

cram('en','de')