import { filterSelectArticle } from './filterSelectArticle'

import { readFileSync } from 'fs'
import { resolve } from 'path'
import { pluck } from 'rambdax'

const LOCATION = resolve(__dirname, '../../files/db.json')
const data = JSON.parse(readFileSync(LOCATION).toString())
const db = pluck('doc', data.rows)

test('filterSelectArticle', () => {
  const result = filterSelectArticle(db)
  
  expect(
    result.length
  ).toBeGreaterThan(100)
})
