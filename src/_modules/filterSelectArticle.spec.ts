import { filterSelectArticle } from './filterSelectArticle'

import { readFileSync } from 'fs'
import { resolve } from 'path'
import { pluck } from 'rambdax'

const LOCATION = resolve(__dirname, '../../files/db.json')
const data = JSON.parse(readFileSync(LOCATION).toString())
const db = pluck<DBInstance>('doc', data.rows)

test('', () => {
  const result = filterSelectArticle(db)
  console.log(result[0])
  console.log(result[1])

  expect(
    0,
  ).toBeFalsy()
})
