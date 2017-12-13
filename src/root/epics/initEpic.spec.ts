import '../rxImports'

import { delay } from 'rambdax'
import { ActionsObservable } from 'redux-observable'

import { SHORT_DELAY } from '../../constants'
import { initEpic } from './initEpic'

const initAction: InitAction = { type: 'INIT' }

test('sync error stops the observer', async () => {

  const dbLocal = {
    allDocs: () => Promise.resolve({ rows: [] }),
  }
  const dbCloud = 'dbCloud'
  const dbName = 'db'
  const dbURL = 'DB_URL'

  const sync = x => {
    return {
      on: (input, callback) => {

        if (input === 'error') {
          callback()
        }

      },
    }
  }

  const getPouchDBMock = jest.fn().mockReturnValueOnce({ sync })
  const initPouchDBMock = jest.fn().mockReturnValueOnce({
    dbCloud,
    dbLocal,
    dbName,
    dbURL,
  })

  const dependencies = {
    getPouchDB: getPouchDBMock,
    initPouchDB: initPouchDBMock,
  }

  const actions$ = ActionsObservable.of(initAction)

  const expectedResult = []

  const actions = await initEpic(actions$, {}, dependencies)
    .toArray()
    .toPromise()

  expect(
    actions,
  ).toEqual(expectedResult)
})

test('change triggers reaction', async () => {
  const dbLocal = {
    allDocs: () => Promise.resolve({ rows: [] }),
  }
  const dbCloud = 'dbCloud'
  const dbName = 'db'
  const dbURL = 'DB_URL'

  const change = { direction: 'pull' }

  const sync = x => {
    return {
      on: (input, callback) => {
        if (input === 'change') {
          callback(change)
        }
        if (input === 'error') {
          delay(SHORT_DELAY).then(() => {

            callback()
          })
        }
      },
    }
  }

  const getPouchDBMock = jest.fn().mockReturnValueOnce({ sync })
  const initPouchDBMock = jest.fn().mockReturnValueOnce({
    dbCloud,
    dbLocal,
    dbName,
    dbURL,
  })

  const dependencies = {
    getPouchDB: getPouchDBMock,
    initPouchDB: initPouchDBMock,
  }

  const actions$ = ActionsObservable.of(initAction)

  const expectedResult = []

  const actions = await initEpic(actions$, {}, dependencies)
    .toArray()
    .toPromise()

  expect(
    actions,
  ).toEqual(expectedResult)
})
