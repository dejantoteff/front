import { createAction } from 'create-action'
import { delay } from 'redux-saga'
import { all, call, put, select, take } from 'redux-saga/effects'

/**
 * Initialization function 
 * 
 * @export
 */
export function* initSagaFn() {
  const { payload } = yield take('INIT')
  yield put(createAction('REPLY')(payload))
}

export function* initSaga() {
  while (true) {
    try {
      yield initSagaFn()
    } catch (err) {
      console.log(err)
    }
  }
}
