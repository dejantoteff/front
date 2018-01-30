import * as Slouch from 'couch-slouch'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { getDB } from './getDB'
import { pluckRows } from '../root/helpers/pluckRows'

const LOCATION = resolve(__dirname, '../../files/db.json')

test('', async () => {
  try{
    const dataRaw = JSON.parse(readFileSync(LOCATION).toString())
    const data = pluckRows(dataRaw.rows)
    console.warn(data[0])
    // const dbValue = getDB({
    //   db: data,
    //   fromLanguage: 'BG',
    //   toLanguage: 'EN',
    // })
  
    // expect(data[0].bgPart).toBeTruthy()
    // expect(dbValue).toBeGreaterThan(31)
    // expect(dbValue.length).toBeGreaterThan(31)
  }catch(e){
    // console.log(e)
  }
})

test.skip('sync with cloud', async () => {
  const couch = new Slouch(`${process.env.COUCH_URL}`)
  const db = await couch.doc.get('db', '_all_docs', { include_docs: true })

  writeFileSync(LOCATION, JSON.stringify(db))

  expect(1).toEqual(1)
})
