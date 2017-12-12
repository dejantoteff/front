import { filter, once, map, prop } from 'rambdax'


const log = once(console.warn)

export const getDB = async ({fromLanguage, toLanguage, db}) =>{
  const filterFn = (firstInstance) => {
    const fromPartKey = `${fromLanguage.toLowerCase()}Part`
    const fromPart =firstInstance[fromPartKey] 
    log(firstInstance,`${fromLanguage.toLowerCase()}Part`, firstInstance[fromPartKey])

    return false
  }

  const first = filter(filterFn,db)
  return first
}

import * as Slouch from 'couch-slouch'
import { writeFileSync,readFileSync } from 'fs';

const LOCATION =  `${__dirname}/db.json`

test('', async () => {
  
  const dbRaw = JSON.parse(
    readFileSync(LOCATION).toString()
  )

  const db = map(prop('doc'))(dbRaw.rows)

  const fromLanguage = 'EN'
  const toLanguage = 'DE'

  const result = await getDB({db, fromLanguage,toLanguage})

  expect(
    result
  ).toEqual([])
})


test.skip('', async () => {
  var couch = new Slouch(`${process.env.COUCH_URL}`)
  const db = await couch.doc.get('db', '_all_docs', {include_docs: true})
  console.warn(db,typeof db,  `${process.env.COUCH_URL}`);
  
  writeFileSync(LOCATION, JSON.stringify(db))

  expect(
    1
  ).toEqual(1)
})