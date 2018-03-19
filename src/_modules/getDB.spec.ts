import { readFileSync } from 'fs'
import { resolve } from 'path'
import { pluck } from 'rambdax'
import { getDB } from './getDB'

const LOCATION = resolve(__dirname, '../../files/db.json')

test('works with Bulgarian', async () => {
  const dataRaw = JSON.parse(readFileSync(LOCATION).toString())
  const data = pluck<DBInstance>('doc', dataRaw.rows)

  const toEn = getDB({
    db: data,
    fromLanguage: 'BG',
    toLanguage: 'EN',
  })
  const toDe = getDB({
    db: data,
    fromLanguage: 'BG',
    toLanguage: 'DE',
  })
  const fromEn = getDB({
    db: data,
    fromLanguage: 'EN',
    toLanguage: 'BG',
  })
  const fromDe = getDB({
    db: data,
    fromLanguage: 'DE',
    toLanguage: 'BG',
  })

  expect(toEn.length).toBeGreaterThan(5)
  expect(toDe.length).toBeGreaterThan(5)
  expect(fromDe.length).toBeGreaterThan(5)
  expect(fromEn.length).toBeGreaterThan(5)
})
