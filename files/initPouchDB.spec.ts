import { initPouchDB } from './initPouchDB'
const spy = jest.fn()

test('', () => {
  process.env.COUCH_URL = 'foo'

  const result = initPouchDB(1)
  const expected = {"dbCloud": {}, "dbLocal": {}, "dbName": "db", "dbURL": "foo/db"}
  
  expect(
    spy
  ).toHaveBeenCalledTimes(2)

  expect(
    result
  ).toEqual(expected)
})