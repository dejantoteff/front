import * as Slouch from 'couch-slouch'
import { writeFileSync } from 'fs'

const LOCATION = `${__dirname}/db.json`

test.skip('', async () => {
  const couch = new Slouch(`${process.env.COUCH_URL}`)
  const db = await couch.doc.get('db', '_all_docs', { include_docs: true })
  console.warn(db, typeof db, `${process.env.COUCH_URL}`)

  writeFileSync(LOCATION, JSON.stringify(db))

  expect(
    1,
  ).toEqual(1)
})
