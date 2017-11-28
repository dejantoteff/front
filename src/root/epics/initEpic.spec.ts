import { identity } from 'rambdax'
import '../rxImports'

import { type } from 'rambdax'
import { createEpicMiddleware } from 'redux-observable'
import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { initEpic } from './initEpic'
const epicMiddleware = createEpicMiddleware(initEpic)

test('sync error stop the observer', async () => {
  const dbLocal = 'dbLocal'
  const dbCloud = 'dbCloud'
  const dbName = 'db'
  const dbURL = 'DB_URL'

  const sync = x => {
    return {
      on: (input, callback) => {
        if(input === 'error'){
          callback()
        }
      },
    }
  }

  const getPouchDBMock = jest.fn().mockReturnValueOnce({ sync })
  const initPouchDBMock = jest.fn().mockReturnValueOnce({ dbName, dbLocal,dbCloud, dbURL })

  const dependencies = {
    getPouchDB: getPouchDBMock,
    getRequest: identity,
    initPouchDB: initPouchDBMock,
  }

  const actions$ = ActionsObservable.of({ type: 'INIT' } as Init)
  
  const expectedResult = [ 
    { type: 'POUCH_READY',payload: { dbLocal: 'dbLocal', dbCloud: 'dbCloud' } },
    { type: 'POUCH_SYNC_ERROR' }
  ]

  const actions = await initEpic(actions$, {}, dependencies)
    .toArray()
    .toPromise()

  expect(
    actions
  ).toEqual(expectedResult)  
})
