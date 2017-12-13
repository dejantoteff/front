beforeEach(() => {
  jest.resetModules()
})

const spy = jest.fn()

jest.doMock('pouchdb-authentication', spy)

jest.doMock('pouchdb', () => {
  return {
    default: { plugin: spy },
  }
})

import { getPouchDB } from './getPouchDB'

test('', () => {
  getPouchDB()

  const timesCalled = 2

  expect(
    spy,
  ).toHaveBeenCalledTimes(timesCalled)
})
