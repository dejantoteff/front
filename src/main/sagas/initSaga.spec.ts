import { createAction } from 'create-action'
import { put, take } from 'redux-saga/effects'
import {
  initSagaFn,
} from './initSaga'

test('', () => {
  const gen = initSagaFn()

  const first = gen.next()
  expect(first.value).toEqual(take('INIT'))

  const second =  gen.next(createAction('INIT')('TEST_FOO'))
  expect(second.value).toEqual(put({ type: 'REPLY', payload: 'TEST_FOO' }))

  const third =  gen.next()
  expect(third.done).toBeTruthy()
})
