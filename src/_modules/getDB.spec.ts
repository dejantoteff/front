import { readFileSync } from 'fs'
import { resolve } from 'path'
import { getDB } from './getDB'
import { pluckRows } from '../root/helpers/pluckRows'

const LOCATION = resolve(__dirname, '../../files/db.json')

test('works with Bulgarian', async () => {
  const dataRaw = JSON.parse(readFileSync(LOCATION).toString())
  const data = pluckRows(dataRaw.rows)
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
